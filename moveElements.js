var parent = document.querySelector("#item");

// var destination = document.querySelector()

var clone = document.querySelector(".Pub").
            cloneNode(true);
setTimeout(function () {
    parent.replaceChild(
        clone,
        parent.lastElementChild);
}, 2000);
