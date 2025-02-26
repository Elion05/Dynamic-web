"use strict";

const spelerNaam = document.getElementById('playerName');
const spelerScore = document.getElementById('score');
const scoreBord = document.getElementById('scoreBoard');

scoreBord.addEventListener('click', ()=>{
    if(!spelerNaam||!spelerScore){
        alert('Vul alles in. ');
    };
});

function voegScoreToe(){
    document.getElementById('scoreBoard').innerHTML =

    `Speler Stats: <li>${spelerNaam} + ${spelerScore}</li>`
};