'use strict'

const getal1Input = document.getElementById('getal1');
const getal2Input = document.getElementById('getal2');
const buttonBerekening = document.getElementById('bereken');
const resultaatParagraaf = document.getElementById('resultaat');
//eventlistener voor de button
buttonBerekening.addEventListener('click', function(){
    const nummer1 = Number(getal1Input.value);
    const nummer2 = Number(getal2Input.value);

    const som = nummer1 + nummer2;
    
   
    resultaatParagraaf.textContent = `Resultaat ${som}`;
})