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

