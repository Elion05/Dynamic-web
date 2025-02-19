'use strict'



let score = 0;
let naam = prompt("wat is je naam");
alert(`Welkom bij de quiz ${naam}!`);

//vragen
let antwoord1 = prompt("Wat is fortnite?");
if(antwoord1.toLowerCase().includes("game")){
    alert("Dat is juist. ");
    score++;
}else{
    alert("Je hebt het niet goed.");
}

let antwoord2 = prompt("Op hoeveel graden cookt water?");
if(antwoord2.toLowerCase().includes("100 graden")){
    alert("Dat is juist. ");
    score++;
}else{
    alert("Dat is fout");
}

let antwoord3 = prompt("Wie is de goat van voetbal? ");
if(antwoord3.toLowerCase().includes("messi")){
alert("Ja, dat is juist.");
score++;
}else{
    alert("Neen, dat is niet juist. ");
}
alert(`${naam}, je score is ${score}/3`);