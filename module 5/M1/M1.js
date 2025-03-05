'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.getElementById('loadButton');
    const gallery = document.querySelector('.gallery');
    const progressBar = document.querySelector('.progress-bar');
    //array met afbeeldingen
    const imageUrl = [
        "https://picsum.photos/800/600",
        "https://picsum.photos/800/601",
        "https://picsum.photos/800/602"
    ];

    //Een functie die een Promise retourneert voor het laden van een afbeelding

    function laadAfbeelding(url){
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(new Error(`Fout bij het laden van de afbeelding: ${url}`));
            };
            img.src = url;
        });
    }

    //functie om voortgang bij te werken
    function updateVoortgang(huidigeAfbeelding, totaalAantalAfbeeldingen){
        const percentage = Math.round(huidigeAfbeelding / totaalAantalAfbeeldingen * 100);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    };
    //functie om gallerij te lden met Promises
    function laadGallerij (){
        //reset gallerij
        gallery.innerHTML = '';
        progressBar.style.width = '0%';
        progressBar.textContent = '0%';

        //start met de eerste afbeelding
        laadAfbeelding(imageUrl[0])
        .then(img => {
            //voeg de eerste afbeelding toe
            gallery.appendChild(img);
            updateVoortgang(1, imageUrl.length);

            //laad de tweede afbeelding
            return laadAfbeelding(imageUrl[1]);
        })
        .then(img => {
            //voeg de tweede afbeelding toe
            gallery.appendChild(img);
            updateVoortgang(2, imageUrl.length);
            //laad de derde afbeelding
            return laadAfbeelding(imageUrl[2]);
        })
        .then(img =>{
            //voeg de derde afbeelding toe
            gallery.appendChild(img);
            updateVoortgang(3, imageUrl.length);
            console.log('Alle afbeedlingen zijn geladne');
        })
        .catch(error => {
            console.error(error);
            alert('er os een fout opgetreden');
        });
    }
    loadButton.addEventListener('click', laadGallerij)
});