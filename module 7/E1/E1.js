"use strict";



const fetchUrl = async () => {
    const resultDiv = document.getElementById('result');
    
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        resultDiv.textContent = 'Bezig met data ophalen.....'

        if(!response.ok){
            throw new Error(`HTTP fout: ${response.status}`);
        }
        const gebruikersData = await response.json();
        resultDiv.textContent = `Title: ${gebruikersData.title}`
        return gebruikersData;
        
    }catch(error){
        console.error("Kon gebruikerdata niet ophalen:" , error);
        resultDiv.textContent = `Er is iets misgegaan bij het ophalen van de data: ${error}`
       resultDiv.classList.add('error')
    };
};
document.getElementById('fetchButton').addEventListener('click', fetchUrl)
