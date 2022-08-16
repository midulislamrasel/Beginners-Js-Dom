
//function Click 
function message() {
    alert('hello Everyone')
}


// -------html tag add---------
var myPera = document.querySelector("#mess");

function message2() {
    myPera.innerHTML = "This is Click Button 01 ";
}
function message3() {
    myPera.innerHTML = "This is Click Button 02 ";
}

//---------- img add ---------

var imgAdd = document.querySelector("#imgId");
function img01() {
    imgAdd.src = "/OnClinck/midul.JPG";
}
function img02() {
    imgAdd.src = "/OnClinck/mahodi.jpg";
}