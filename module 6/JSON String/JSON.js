"use strict";


const haalGebruiker1 = document.getElementById('haalGebruiker1');
const haalGebruiker3 = document.getElementById('haalGebruiker3');
const haalGebruiker2 = document.getElementById('haalGebruiker2');
const resultaat = document.getElementById('resultaat');


haalGebruiker1.addEventListener('click', ()=>{
//Een JSON-String met informatie naar keuze
const jsonString1 = `{
"naam" : "Elion",
"leeftijd" : "19",
"interesses" : ["gamen", "sport", "game development?"],
"contactInfo" : {
"email" : "Elion.rexborn@gmail.com",
"telefoon" : "+32484965139"
},
"actief" : true
}`;



//JSON  omzetten naar een javascript-object
const gebruiker1 = JSON.parse(jsonString1);


resultaat.innerHTML = `
<h1>Dit is gebruiker1</h1>
<p>Naam: ${gebruiker1.naam}</p>
<p>Leeftijd: ${gebruiker1.leeftijd}</p>
<p>Interesses: ${gebruiker1.interesses}</p>
<p>Contact Informatie: ${gebruiker1.contactInfo.email},${gebruiker1.contactInfo.telefoon}</p>
<p>actief: ${gebruiker1.actief}</p>
`



});
haalGebruiker2.addEventListener('click', ()=>{


    const jsonString2 = `{
        "naam" : "Dardan",
        "leeftijd" : "14",
        "interesses" : ["boksen", "sport", "voetball"],
        "contactInfo" : {
        "email" : "Dardan@gmail.com",
        "telefoon" : "+32484965139"
        },
        "actief" : false
        }`;


const gebruiker2 = JSON.parse(jsonString2)


resultaat.innerHTML = `
<h1>Dit is gebruiker2</h1>
<p>Naam: ${gebruiker2.naam}</p>
<p>Leeftijd: ${gebruiker2.leeftijd}</p>
<p>Interesses: ${gebruiker2.interesses}</p>
<p>Contact Informatie: ${gebruiker2.contactInfo.email},${gebruiker2.contactInfo.telefoon}</p>
<p>actief: ${gebruiker2.actief}</p>
`
})