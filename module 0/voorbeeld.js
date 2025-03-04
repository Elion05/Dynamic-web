"use strict";

const p1OP = document.getElementsByTagName('p');
const buttonPress = document.getElementById('buttonE');


buttonPress.addEventListener('click', ()=>{
    for(let p of p1OP){
        p.textContent = 'hello'
    }
});