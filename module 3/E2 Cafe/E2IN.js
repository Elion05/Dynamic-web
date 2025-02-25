"use strict";
 

const maakBestelling = (drank = 'cola', snack = 'chips') =>{
    return {
        drank,
        snack,
        tijd: new Date().toLocaleDateString()
    }
};

const bestelling1 = maakBestelling();
const bestelling2 = maakBestelling('water', 'noten');
const bestelling3 = maakBestelling('sprite', 'pizza');
const bestelling4 = maakBestelling('fanta', 'snoepjes');


//hier gebruiken we een innerHTML
const output = document.getElementById('Bestellingen');
output.innerHTML += `
<div>
Bestelling 1: ${bestelling1.drank} en ${bestelling1.snack} op ${bestelling1.tijd}
</div>

<div>
Bestelling 2: ${bestelling2.drank} en ${bestelling2.snack} op ${bestelling2.tijd}
</div>

<div>
Bestelling 3: ${bestelling3.drank} en ${bestelling3.snack} op ${bestelling3.tijd}
</div>

<div>
Bestelling 4: ${bestelling4.drank} en ${bestelling4.snack} op ${bestelling4.tijd}
</div>




`