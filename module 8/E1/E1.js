"use strict";


const themeToggle = document.getElementById('themeToggle');
const body = document.body;


function toggleTheme () {
    //controlleer het huidige thema
    if(body.classList.contains('light-theme')){
        //schakel naar donker thema
    
    body.classList.replace('light-theme', 'dark-theme');
    themeToggle.textContent = 'Light Theme';
    //sla de voorkeur op in localstorage
    localStorage.setItem('theme', 'dark-theme');
}else{
    //schakel naar licht theme
    body.classList.replace('dark-theme', 'light-theme');
    themeToggle.textContent = 'dark theme'
    //sla de voorkeur op in de localstorage
    localStorage.setItem('theme', 'light-theme');
}
}

themeToggle.addEventListener('click', toggleTheme)

function loadTheme () {
    //haal het opgeslagen thema uit localstorage
    const savedTheme = localStorage.getItem('theme');
//als er een opgeslagen thema is
if(savedTheme){
    //verwijder het huidige thema  en voeg het opgeslagen thema toe
    body.className = savedTheme;

    //Update ook de tekst van de knop
    if(savedTheme === 'dark-theme'){
        themeToggle.textContent = 'Light Theme';
    }else{
        themeToggle.textContent = ' Dark  theme'
    }
}
}
loadTheme();













