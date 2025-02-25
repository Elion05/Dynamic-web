"use  strict";


//Verkorterde functie
const maakBestelling = (drank = 'cola' ,snack = 'chips') => {
    return {
        drank,
        snack,
        tijd: new Date().toLocaleDateString()
    }
};
//Bestellingen
const bestelling1 = maakBestelling();
const bestelling2= maakBestelling('fanta', 'snoepjes');
const bestelling3 = maakBestelling('sprite', 'noten');




//dit is gewoon een simpele textContent change
const bestel1 = document.getElementById('Bestellingen1');
bestel1.textContent = `Bestelling 1: ${bestelling1.drank} en ${bestelling1.snack} en ${bestelling1.tijd}`;

const bestel2 = document.getElementById('Bestellingen2');
bestel2.textContent = `Bestelling 2: ${bestelling2.drank} en ${bestelling2.snack} en ${bestelling2.tijd}`;




