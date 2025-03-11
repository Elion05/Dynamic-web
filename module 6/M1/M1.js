"use strict";

const endPointKnoppen = document.querySelectorAll('.endpoint-knop');
const statusInfoDiv = document.getElementById('status-info');
const responseDetailsDiv = document.getElementById('response-details');


//functie om statuscode klasse te bepalen
function getStatusClass(code){
    if(code >= 200 && code < 300) return 'status success';
        if(code >= 300 && code < 400)  return 'status-redirect';
             if(code >= 400 && code < 500) return 'status-client-error';
                if(code >= 500) return 'status-server-error';
                return '';
};
//Functie om statusgroep naam te bepalen
function getStatusGroupName(code){
    if(code >= 200 && code < 300) return 'Succes';
    if(code >= 300 && code < 400) return 'Redirect';
    if(code >= 400 && code < 500) return 'Client Error';
    if(code >= 500) return 'Server-Error';
    return 'Unknown';
};
//functie om headers om te zetten naar tekst
function formatHeaders(headers){
    let result = '';
    for(const [key, value] of headers.entries()){
        result += `${key}: ${value}\n`;
    }
    return result || 'Geen headers gevonden';
}
//Event listeners toevoegen aan alle endpoint knoppen
endPointKnoppen.forEach(knop => {
    knop.addEventListener('click', async()=>{
        //status code ophalen uit data attribuut
        const statusCode = knop.dataset.code;
        //statussen resetten en laad-indicator tonen
        statusInfoDiv.innerHTML =`Bezig met ophalen...`;
        responseDetailsDiv.textContent = ``;
        
        try{
            //fetch request maken naar de httpstat.us met  de gewenste statuscode
            const response = await fetch(`https://httpstat.us/${statusCode}`);
            //Bepaal de juiste statuskleur en naam
            const statusClass = getStatusClass(response.status);
            const statusGroupName = getStatusGroupName(response.status);
            //toon de basis status informatie
            statusInfoDiv.innerHTML = `
            <p class="${statusClass}">
            <strong>Status:</strong>${response.status} ${response.statusText}<br>
            <strong>OK?</strong>${response.ok ? 'Ja' : 'Nee'}<br>
            <strong>Categorie:</strong>${statusGroupName}
            </p>      
            `

            //toont de response details
            responseDetailsDiv.textContent = `// Headers
            ${formatHeaders(response.headers)} 
            //Response Type: ${response.type}
            //Response URL: ${response.url}
            `;
        }catch(error){
            //Fouthandeling voor netwerkfouten
            statusInfoDiv.innerHTML  = `
            <p class="status-client-error">
            <strong>Netwerkfout</strong> ${error.message}
            </p>    
            `;
            responseDetailsDiv.textContent = "Kon geen verbinding maken met de server";
            console.error('Fetch Error', error);
        }
    })

})
