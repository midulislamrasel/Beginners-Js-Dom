
for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var sound = this.innerHTML;
        console.log(sound);


        switch (sound) {
            case "a":
                    var audio = new Audio("sound/a.mp3");
                    audio.play();
                break;
            case "b":
                    var audio = new Audio("sound/b.mp3");
                    audio.play();
                break;
            case "c":
                    var audio = new Audio("sound/c.mp3");
                    audio.play();
                break;
        }

    })
}
