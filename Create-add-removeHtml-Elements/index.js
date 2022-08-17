//Creating html Element
var heading3 = document.createElement("h1");
var text = document.createTextNode("Fore Title");
heading3.appendChild(text);

var myDIv = document.getElementById("my-div");
myDIv.appendChild(heading3);

// Remove html Element 
var heading2 = document.getElementsByTagName("h1")[1];
myDIv.removeChild(heading2);


// Creating Html Element First item
var heading0 = document.createElement("h1");
var textZero = document.createTextNode("Zero Title");
heading0.appendChild(textZero);
var heading = document.getElementsByTagName("h1")[0];
myDIv.insertBefore(heading0,heading);