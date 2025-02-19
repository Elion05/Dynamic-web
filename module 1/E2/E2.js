'use strict';


//selecteer het loading message element
const loadingMessage = document.getElementById('loadingMessage')
//wachten totdat alles geladen is
window.addEventListener('load', function(){
//tekst veranderen naar welkom

loadingMessage.textContent = 'Welcome to my website';

//Het laten verbergen na 2 seconden of meer kies
setTimeout(function(){
   loadingMessage.style.display = 'none'; 
}, 4000);
})