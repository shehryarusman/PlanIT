// will migrate functions from the creat_planner.html page to here after the server is completed 


function getPageNumber()
{
    var select = document.getElementById('pages') ;
    var value = select.options[select.selectedIndex].value ;
    console.log(value); // get value 
    //console.log(select.selectedIndex); // get index number 
}


function getListNumber()
{
    var select = document.getElementById('lists') ;
    var value = select.options[select.selectedIndex].value ;
    console.log(value); // get value
    //console.log(select.selectedIndex); // get index number 
}


function getDesign()
{
    var select = document.getElementById('designs') ;
    var value = select.options[select.selectedIndex].value ;
    console.log(value); // get value
    //console.log(select.selectedIndex); // get index number 
}
