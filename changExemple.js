
function createImageNode(src, alt = "one image", title = "one image") {
    let img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.title = title;
    return img;
}

var codeInterval = setInterval(function () {
    var li = document.querySelector("li");
    if (li) {
        var parent = li.parentNode;
        parent.replaceChild(createImageNode("default.png"),li);
    } else {
        clearInterval(codeInterval);
    }
},1000);
