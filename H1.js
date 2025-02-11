'use strict'

const themaknop = document.getElementById('themaknop');
const body = document.body;


themaknop.addEventListener('click' , ()=>{
    const isDonker = body.style.backgroundColor === 'black'
    

    //wisselt kleuren
    body.style.backgroundColor = isDonker ? 'white' : 'black' ;
    body.style.color = isDonker ? 'black' :  'white';

    //veranderen van link kleur
    const links = document.getElementsByTagName('a');
    for(let link of links){
        link.style.color = isDonker ? 'blue' : 'yellow';
    }

    //update knopt tekst
    themaknop.textContent = isDonker ? 'Donker thema' : 'Licht thema' ;   
})