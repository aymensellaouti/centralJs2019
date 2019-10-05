let jouer = true;
while(jouer) {
    let rand = Math.round(Math.random() * 10);
    alert("Jeux commencé, vous avez 3 tentives");
    let nbt = 3;
    while(nbt > 0) {
        do {
            var tentative = prompt("tentative numéro : ", nbt, " saisissez un uméro entre 0 -10");
        } while (tentative <0 || tentative > 10);
        if(tentative == rand) {
            alert("bien joué");
            nbt = 0;
        } else if (tentative < rand ) {
            alert("plus grand ");
        } else {
            alert("plus petit");
        }
        nbt--;
    }
    jouer = confirm("Voulez vous rejouer");
}
