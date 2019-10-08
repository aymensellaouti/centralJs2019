var parent  = document.querySelector("div");

var monImage = document.createElement("img");

monImage.src = "default.png";
monImage.alt = "monImage";
monImage.title = "default image";



// var newNode = monImage;
var show = true;
setInterval(function () {
    if( show) {
        parent.insertBefore(monImage, parent.firstChild);
    } else {
        parent.appendChild(monImage);
    }
    show = !show;
}, 2000);
