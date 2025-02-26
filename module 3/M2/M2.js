"use strict";



const spelerNaam = document.getElementById('playerName');
const spelerScore = document.getElementById('score');
const scoreBord = document.getElementById('scoreBoard');

function voegScoreToe(){
if( !spelerNaam.value || isNaN(spelerScore.value)){
alert('Vul alles in');
return;
    };
};
