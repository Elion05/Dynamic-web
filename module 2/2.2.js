"use strict"


//wat is het verschil tussen let en const?

//let kan je nog veranderen
let getal1 = 5;
//Soms wil je dat waarden nooit veranderen, hier gebruik je (const)
//als je het dan probeert te veranderen dan zal het een error geven
const myConstant = 'Dit is niet aanpasbaar';

console.log(myConstant);

myConstant = 'Dit is aangepast!';

console.log(myConstant);