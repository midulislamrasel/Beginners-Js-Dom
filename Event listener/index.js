/*
//click
var para = document.querySelector("#text");
para.addEventListener("click", function () {
        para.classList.add("styleCss")
})

//MouseOver
var mouseover = document.querySelector("#over");
mouseover.addEventListener("mouseover", function () {
        mouseover.classList.add("over")
})

//MouseOut
var mouseleve = document.querySelector("#leve");
mouseleve.addEventListener("mouseout", function () {
        mouseleve.classList.add("out")
})

*/



//------------------ multiple--------------------
//01
document.querySelectorAll(".myButtion")[0].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("p").innerHTML = text + " is Clicked"
})
//02
document.querySelectorAll(".myButtion")[1].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("p").innerHTML = text + " is Clicked"
})
//03
document.querySelectorAll(".myButtion")[2].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("p").innerHTML = text + " is Clicked"
})




//একই কাজ বার বার না করে For ব্যাবহার করা হয়েছে ।
for (let i = 0; i <=2; i++) {
        document.querySelectorAll(".myButtion")[i].addEventListener("click", function () {
                var text = this.innerHTML;
                document.querySelector("p").innerHTML = text + " is Clicked"
        })
        
}
