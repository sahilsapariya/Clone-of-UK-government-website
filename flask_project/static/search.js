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
