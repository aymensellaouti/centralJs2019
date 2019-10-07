
var monLien = prompt("veuillez saisir votre lien : ");

//var monCv = document.getElementById("monCv");
var monCv = document.querySelector("#monCv");

monCv.href = monLien;


var mesA = document.querySelectorAll("a");

mesA.forEach(function (monA) {
    console.log(monA);
    alert(monA.href);
});
