document.addEventListener("keypress", function (event) {
    var text = event.key;
    document.querySelector("p").innerHTML = "You have pressed : " + text;
})



count = 0;
document.querySelector("#textArea").addEventListener("keypress", function (event) {
    count++;
    var text = event.key;
    document.querySelector("h3").innerHTML = "key count : " + count;
})