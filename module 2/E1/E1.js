"use strict";

//scores array
let scores = [];

//elementen ophalen
const scoreInput = document.getElementById(`score`);
const addButton = document.getElementById('addScore');
const averageSpan = document.getElementById('average');
const highestSpan = document.getElementById('highest');
const scoreList = document.getElementById('scoreList');

//event listener voor de knop

addButton.addEventListener('click', ()=>{
    //score ophalen en valideren
    let score = Number(scoreInput.value);
    if(score < 0 || score > 20 || !scoreInput.value){
        alert('geef  een geldige score in van  0 tot 20');
        return;
    }
    //score toevoegen aan de array
    scores.push(score);

    //het geimddelde berekenen
    let sum = 0;
    for(let score of scores){
        sum += score;
    }
    let average = sum / scores.length;
    averageSpan.textContent = average.toFixed(1);


    //hoogste score vinden
    let highest = 0;
    for(let score of scores){
        if(score > highest){
            highest = score
        }
    }
    highestSpan.textContent = highest;


    //score toevoegen aan lijst

    scoreList.innerHTML = '';
    for(let score of scores){
        let li = document.createElement('li');
        li.textContent = score;
        scoreList.appendChild(li);
    }
    scoreInput.value = ``;
})