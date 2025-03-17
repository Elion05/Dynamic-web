"use strict";


const board = document.getElementById('board');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');

//for loop om het board spel aan te vullen met 9 vakken
for(let index = 0; index < 9; index++){
    const cell = document.createElement('div'); //een div maken
    cell.classList.add("cell")//voeg class "cell" toe.
    cell.dataset.index = index; //elke vakje krijgt een unieke nummer
    board.appendChild(cell); //voeg het vakje toe aan het board
}



console.log(document.querySelectorAll(".cell"));

