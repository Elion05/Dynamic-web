"use strict"

let numbers = [1,2,3,4,5,6,7,8,9];


//Slice gaat het kopieren van de getallen van 2 tot 8
//het kopiert alle getalen tot het einde van de laatste geschreven getal
//hier is dat 9 nu het eindigt dus bij 8,
let subset = numbers.slice(1,8);
console.log(subset)

//verwijdert 2 getallen van index 2(dus 3 en 4 gaan weg)
numbers.splice(2,2);
console.log(numbers)

//dit voegt het getal 880 op index 2 in de array
numbers.splice(2,0, 880);
console.log(numbers);


//dit gaat alles sorteren in alfabetische volgorde
let sport = ["honkbal" , "voetbal" , "basebal", "Rugby"];
sport.sort();
console.log(sport)