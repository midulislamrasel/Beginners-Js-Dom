// keyEvent Oject
//1. keydown - pressing a key,can repeat
//2.keypress -(may not supported by some browser)
//3. keyup
// some properties -key, keyCode ,  code, shiftkey,ctlkey,repeat

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function (e) {
    if (e.repeat) {
        alert("Do not repeat ...")
    } else {
        console.log("keyDown....")
    }
})
// textarea.addEventListener("keypress", function () {
//     console.log("keypress....")
// })
// textarea.addEventListener("keyup", function (e) {
//     console.log(e.key)
//     console.log(e.keyCode)
//     console.log(e.Code)
// })