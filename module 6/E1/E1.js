"use strict";


const haalTekstOp = document.getElementById('haalTekstOp');
const resultaat = document.getElementById('resultaat');

haalTekstOp.addEventListener('click', () =>{

    //daat ophalen met fetch
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(resultaat => {
      console.log('Status:', resultaat.status); // bijv. 200 OK
      console.log('Status text:', resultaat.statusText); // bijv. "OK"
      console.log('Headers:', resultaat.headers.get('Content-Type'));
    
      // Controleer of de request succesvol was
      if (!resultaat.ok) {
        throw new Error(`HTTP fout ${resultaat.status}: ${resultaat.statusText}`);
      }
    //JSON data omzetten naar javascript object
      return resultaat.json(); // Data omzetten naar JSON
    })
    .then(data => {
        //JSON data formatteren naar mooie tekst
        console.log('Ontvangen data:', data);
        const tekstResultaat = `
        <h2>${data.title}</h2>
        <div>${data.body}</div>
        <p><em>Post Id: ${data.id},  User Id: ${data.userId}</em></p>
        `;

        resultaat.innerHTML = tekstResultaat;
    })
    .catch(error =>{
        //fouthandeling
        resultaat.innerHTML = `
        <p Class="error">Er is iets fout gegaan: ${error.message}</p>
        <p>Probeer het later opnieuw</p>
        `;
        console.error('Fetch error:', error);

    });
});

