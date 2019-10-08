var parent  = document.querySelector("div");

var monImage = document.createElement("img");

monImage.src = "default.png";
monImage.alt = "monImage";
monImage.title = "default image";

var p = document.querySelector("p");
var links = document.querySelectorAll("a");
// var newNode = monImage;

links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        if(!confirm("voulez vous réelement visitez " + link.href)) {
            e.preventDefault();
        }
    })
})

var show = true;
setInterval(function () {
    if( show) {
        parent.insertBefore(monImage, parent.firstChild);
    } else {
        parent.appendChild(monImage);
    }
    show = !show;
}, 2000);

monImage.addEventListener('click', function (e) {
    //console.log(e);
    p.classList.toggle("para");
})
