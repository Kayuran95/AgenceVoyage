//Calcul prix billet
function calculPrix() {
    var prixBillet = document.getElementById("prixBillet").value;
    var nombrePersonne = document.getElementById("nombrePersonne").value;
    var classeType = document.getElementById("classeType").value;


    //input invalide
    if (prixBillet === "" || classeType == 0) {
        alert("Veuillez inscrire un prix");
        return;
    }
    //Si la valeur est vide
    if (nombrePersonne === "" || nombrePersonne <= 1) {
        nombrePersonne = 1;
        document.getElementById("parPersonne").style.display = "none";
    } else {
        document.getElementById("parPersonne").style.display = "block";
    }

    //calcul prix des billets
    var total = (prixBillet * classeType) * nombrePersonne;
    //arrondi à 2 décimal
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    //Display les prix
    document.getElementById("prixTotal").style.display = "block";
    document.getElementById("prix").innerHTML = total;

}

//Display le montant
document.getElementById("prixTotal").style.display = "none";
document.getElementById("parPersonne").style.display = "none";

//click pour appeler la fonction
document.getElementById("calculate").onclick = function () {
    calculPrix();

};

//changement de la couleur aléatoire du btn

const btn = document.getElementById('calculate');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    btn.style.backgroundColor = rndCol;
}

btn.addEventListener('click', changeBackground);


//ajout de texte

function addElement() {
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode('Passez un bon voyage!');
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById('container');
    document.body.insertBefore(newDiv, currentDiv);
}

btn.addEventListener('click', addElement);
