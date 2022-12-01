// Jeu //

// Bouttons //
const btnRed =document.getElementById("btn-red");
const btnBlue =document.getElementById("btn-blue");
const btnGreen =document.getElementById("btn-green");
const btnYellow =document.getElementById("btn-yellow");

let compteur = 0;
let score = document.getElementById('para');
score.innerHtml = "test";

console.log(compteur, "compteur au démarage");

function add(){
    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
    score.innertext = compteur;
};

function minus(){
    compteur = compteur - 2;
    console.log(compteur, "compteur après incrémentation");
    score.innerhtml = compteur;
};
btnRed.addEventListener("click", function(){
   add();
});

btnBlue.addEventListener("click", function(){
    minus();
});

btnGreen.addEventListener("click", function(){
    compteur -5;
});

btnYellow.addEventListener("click", function(){
    minus();
});


