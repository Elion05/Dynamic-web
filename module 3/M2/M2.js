"use strict";


const addScore = document.getElementById('addScore');
const scoreBoard = document.getElementById('scoreBoard');

let verwerkScore = (n = 'onbekend', s = 0) => {
    if(n == ""){
        alert('Invalid name')
    }
    if(s < 0){
        alert('Invalid score');
    }
    return{
        player : n,
        score: s
    }
}
addScore.addEventListener('click', function(){
    let score = verwerkScore(document.getElementById('playerName').value, document.getElementById('score').value);
    let h1 = document.getElementById('h1');
    h1.innerHTML = `Naam: ${score.player} | Score: ${score.score}`;

    scoreBoard.appendChild(h1);
});