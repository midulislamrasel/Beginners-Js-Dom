// -------------------
//01.click
//02.bdlclick
//03.mousedown
//04.mousedup
//05.mouseenter
//06.mouseleave
//07.mouseMove
//08.mouseover
const div = document.querySelector("div");
div.addEventListener("click", function (e) {
    // console.log("click....");
    console.log(e.target.id)
})

div.addEventListener("dblclick", function () {
    console.log("dblclick....");
})

div.addEventListener("mousedown", function () {
    console.log("mousedown....");
})

div.addEventListener("mouseup", function () {
    console.log("mouseup....");
})



div.addEventListener("mousemove", function (e) {
    // console.log("mousemove X : " + e.clientX + " mousemove Y: " + e.clientY);

    console.log("offsetX : " + e.offsetX + " offset Y: " + e.offsetY);
})