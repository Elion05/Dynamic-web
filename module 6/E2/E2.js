"use strict"

//de javascript code wordt pas toegepassen nadat de HTML volledig is geladen
document.addEventListener("DOMContentLoaded", function () {
    const gebruikersContainer = document.getElementById("gebruikers-container");

    //Haal gebruikers op van de API
    fetch("https://jsonplaceholder.typicode.com/users")
    //response => is wachten op een antwoord van de server
        .then(response => {
            //als er een fout is  = error
            if (!response.ok) {
                throw new Error("Fout bij ophalen van gegevens");
            }
            return response.json();
        })
        //verwijdert de "gebruikers laden zodra de gegevens zijn opgehaald"
        .then(gebruikers => {
            gebruikersContainer.innerHTML = ""; // Verwijder laad-indicator

            //deze code zegt eigenlijk, voor elke gebruiker, de code binnen de {} uitvoeren
            //Dus een div maken met een innerHTML
            gebruikers.forEach(gebruiker => {
                const gebruikerKaart = document.createElement("div");
                gebruikerKaart.classList.add("gebruiker-kaart");

                gebruikerKaart.innerHTML = `
                    <div class="gebruiker-naam">${gebruiker.name}</div>
                    <div class="gebruiker-email">${gebruiker.email}</div>
                    <div class="gebruiker-telefoon">${gebruiker.phone}</div>
                `;
                //de nieuwe div in de bestaande HTML bestand toevoegen
                gebruikersContainer.appendChild(gebruikerKaart);
            });
        })
        //Als er een fout is, een foutmelding komt ervoor
        .catch(error => {
            gebruikersContainer.innerHTML = `<div class="error-melding">Er is iets misgegaan: ${error.message}</div>`;
        });
});
