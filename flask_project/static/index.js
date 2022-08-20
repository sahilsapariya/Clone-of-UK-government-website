const searchList = () =>{
    let searchedText = document.getElementById("search-textbox").value.toUpperCase();

    let search_list = document.getElementsByClassName('search-page-list');

    for(var i=0; i<search_list.length; i++){
        let h3 = search_list[i].getElementsByTagName('h3')[0].childNodes[0].innerText;

        if(h3.toUpperCase().indexOf(searchedText) > -1){
            search_list[i].style.display = '';
        }
        else{
            search_list[i].style.display = 'none';
        }
    }
}

const yes = (a, c, d) =>{
    let usefull = document.getElementById(a);
    let report_prob = document.getElementById(c);
    let thankyou = document.getElementById(d);

    if(thankyou.style.display == 'none'){
        thankyou.style.display = 'block';
        usefull.style.display = 'none';
        report_prob.style.display = 'none';
    }8
}


const showTopics = (a, b, c,d) => {
    let para1 = document.getElementById(a);
    let para2 = document.getElementById(b);
    let btn1 = document.getElementById(c);
    let btn2 = document.getElementById(d);


    if(para1.style.display == 'none'){
        para1.style.display = 'block';
        para2.style.display = 'none';
        btn1.style.borderBottomColor = '#f3f2f1';
        btn2.style.borderBottomColor = '#000';
    }
    else{
        para1.style.display = 'none';
        btn1.style.borderBottomColor = '#000';
    }
}

const showActivity = (a, b, c, d) => {
    let para1 = document.getElementById(a);
    let para2 = document.getElementById(b);
    let btn1 = document.getElementById(c);
    let btn2 = document.getElementById(d);

    if(para1.style.display == 'none'){
        para1.style.display = 'block';
        para2.style.display = 'none';
        btn1.style.borderBottomColor = '#f3f2f1';
        btn2.style.borderBottomColor = '#000';

    }
    else{
        para1.style.display = 'none';
        btn1.style.borderBottomColor = '#000';
    }
}
