var photo = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"]
var imgTag = document.querySelector("img");

var count = 1;
function next() {
    count++;
    if (count >= photo.length) {
        count = 0;
        imgTag.src = photo[count];
    } else {
        imgTag.src = photo[count];
    }
    // imgTag.src = photo[count];
}

function previous() {
    count--;
    if (count < 0) {
        count = photo.length -1;
        imgTag.src = photo[count];
    } else {
        imgTag.src = photo[count];
    }
}