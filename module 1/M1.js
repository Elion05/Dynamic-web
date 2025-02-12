'use strict'
//Selecteert alle special elementen
let specialElement = document.querySelectorAll(`.special`);
//maakt ze rood
specialElement.forEach(element => {
    element.style.color = 'red';
});

//onderlijnt de 'p' op de juiste plaats
let pElement = document.querySelectorAll('p');
pElement[1].style.textDecoration = 'underline';
//toont aantal special elementen in de html
let output = document.getElementById('output');
output.textContent = `Aantal special elementen : ${specialElement.length}`;

//alternatieve methode met de getElementByClassName
let specialElementAlt = document.getElementsByClassName('special');
console.log(`Gevonden met getElementByClasseName : ${specialElementAlt.length}`);