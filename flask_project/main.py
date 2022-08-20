from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
import json

with open("config.json", 'r') as c:
    params = json.load(c)["params"]

app = Flask(__name__)
app.config.update(
    MAIL_SERVER="smtp.gmail.com",
    MAIL_PORT="465",
    MAIL_USE_SSL=True,
    MAIL_USE_TLS=False,
    MAIL_USERNAME=params["gmail-username"],
    MAIL_PASSWORD=params["gmail-password"]
)

mail = Mail(app)

app.config['SQLALCHEMY_DATABASE_URI'] = params['local_url']
db = SQLAlchemy(app)


class ContactForm(db.Model):
    """srno, name, email, message, it_to_do"""
    srno = db.Column(db.Integer, primary_key=True)
    it_to_do = db.Column(db.String(15), nullable=False)
    c_name = db.Column(db.String(30), nullable=False)
    c_email = db.Column(db.String(20), nullable=False)
    message = db.Column(db.String(100), nullable=False)


@app.route('/')
def welcome():
    return render_template("index.html")


@app.route('/search')
def search():
    return render_template("search.html")


@app.route('/contact')
def contact():
    return render_template("contact.html")


@app.route('/contact/govuk', methods=['GET', 'POST'])
def contact_form():
    if request.method == 'POST':
        c_name = request.form.get('c_name')
        c_email = request.form.get('c_email')
        it_to_do = request.form.get('it_to_do')
        message = request.form.get('message')

        entry = ContactForm(c_name=c_name, c_email=c_email, it_to_do=it_to_do, message=message)
        db.session.add(entry)
        db.session.commit()

        mail.send_message("Suggestion from a user",
                          sender=c_email,
                          recipients=[params["gmail-username"]],
                          body="Name : " + c_name + "\n"
                               "Email : " + c_email + "\n"
                               "What's it to do with? : " + it_to_do + "\n"
                               "Message : " + message)

    return render_template("contactForm.html", params=params)


app.run(debug=True)
