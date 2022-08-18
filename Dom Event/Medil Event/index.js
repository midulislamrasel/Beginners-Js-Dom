//audio/video events
//canplay,play,playing,pause,progress,ended,volumechange,waiting

const video = document.querySelector("video");
video.addEventListener("canplay", function () {
    console.log("Canplay...")
})

video.addEventListener("play", function () {
    console.log("play...")
})

video.addEventListener("pause", function () {
    console.log("pause...")
})

video.addEventListener("ended", function () {
    console.log("Thanks for watching...")
})