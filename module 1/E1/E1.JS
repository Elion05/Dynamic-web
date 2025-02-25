"use strict"


let score = 0;
let naam = prompt('wat is je naam?');
alert(`Welcome ${naam}! Laten we een quiz spelen. `);

let vraag1 = prompt('Vraag 1, wat is de hoofdstad van België? ');
if(vraag1.toLowerCase().includes('brussel')){
    alert('Je hebt het juist! ');
    score++;
}else{
    alert('Je hebt het fout.');
};
alert('Volgende vraag.')
let vraag2 = prompt('Vraag 2, Heeft een paard een hoofd of een kop?');
if(vraag2.toLowerCase().includes('hoofd')){
    alert('Je hebt het juist!');
    score++;
}else{
    alert('Neen, je hebt het fout. ')
};
alert('Laatste vraag')
let vraag3 = prompt('Vraag 3, Is de aarde rond of plat? ');
if(vraag3.toLowerCase().includes('rond')){
    alert('Ja, je hebt het juist!')
    score++;
}else{
    alert('Neen , jij donut, hoe kan je dit nou fout hebben.')
};

alert(`Je totale score is: ${score}.`);
if(score < 3){
    alert('Je had bijna alles juist.')
}else{
    alert('Gefeliciteerd met de totale overwinning! ')
;}