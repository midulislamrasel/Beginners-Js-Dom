//FocusEvent Object
//01.blur
//20.focus
//03.focusin
//04.focusout

const input = document.querySelector("input");
input.addEventListener("blur", function (e) {
    input.value = e.target.value.toUpperCase();
    console.log(e.target.value)
})
// input.addEventListener("focus", function () {
//     // console.log("focus ....") 
//     input.style.backgroundColor = "gray";
//     input.style.padding = "10px";
//     input.style.borderRadius = "10px";
//     input.style.color = "#fff";

// })
// input.addEventListener("focusin", function () {
//     console.log("focusin ....") 
// })
// input.addEventListener("focusout", function () {
//     console.log("focusout ....") 
// })

