'use strict'


const getal1Input = document.getElementById('getal1');
const getal2Input= document.getElementById('getal2');
const berekenKnop = document.getElementById('bereken');
const resultaatid = document.getElementById('resultaat');

berekenKnop.addEventListener('click' , () =>{
const nr1 = Number(getal1Input.value);
const nr2 = Number(getal2Input.value);

const som = nr1 + nr2;
resultaatid.textContent = som;
});