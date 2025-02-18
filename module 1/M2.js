'use strict'
//de grid eerst maken
let grid = document.getElementById('grid');
let redCount = document.getElementById('redCount');
let blueCount = document.getElementById('blueCount');
let greenCount = document.getElementById('greenCount');
//om 25 elementen te maken maak je een for loop
for(let index = 0; index < 25; index++){
    const cell = document.createElement('div')
    cell.className = 'div1class'
    grid.appendChild(cell);
}

//Helper functie om kleuren te tellen
function updateCounts(){
    const cells = document.getElementsByClassName('div1class');
    let red = 0, blue = 0, green = 0;

Array.from(cells).forEach(cell =>{
    if(cell.style.backgroundColor === 'red') red++;
    if(cell.style.backgroundColor === 'blue') blue++;
    if(cell.style.backgroundColor === 'green') green++;
});

redCount.textContent = red;
blueCount.textContent = blue;
greenCount.textContent = green;
}


//events toevoegen aan elke cel
//de eerste is, als je er over hovert
grid.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('div1class')) {
        e.target.style.backgroundColor = 'red';
        updateCounts();
        
    }
});
//de tweede is voor als je erop clickt
grid.addEventListener('click', function(e){
    if(e.target.classList.contains('div1class')){
        e.target.style.backgroundColor = 'blue';
        updateCounts();
    }
});

//de derde is er voor als je dubbel clickt
grid.addEventListener('dblclick', function(e){
    if(e.target.classList.contains('div1class')){
        e.target.style.backgroundColor = 'green';
        updateCounts(); 
    }
});


