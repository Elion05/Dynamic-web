"use strict";

let eten = [];

const  nameInput = document.getElementById('recipeName');
const  timeInput = document.getElementById('prepTime');
const  ingredientsInput = document.getElementById('ingredients');
const  generateButton = document.getElementById('generateCard');
const  resultDiv = document.getElementById('result');

//addEventListener
generateButton.addEventListener('click' , ()=>{
    //waardes ophalen
    const name = nameInput.value;
    const time = timeInput.value;
    const ingredients = ingredientsInput.value

    .split('\n')
    .filter(ingredients => ingredients.trim() !== '');
    //Validatie
    if(!name || !time || ingredients.length === 0){
        alert('Vul all werken in');
        return;
    }
    //template maken
    const recipeCard =`
    <div class="recipe">
        <h2>🍴${name}</h2>
        <p>⏰Bereidingstijd: ${time}</p>

        <h3>Ingrediënten:</h3>
        <ul>
            ${createIngredientsList(ingredients)}
        </ul>
    </div>
    `;
//aanmaken van lijst met for of loop

function createIngredientsList(ingredients){
    let listItems = '';
    for(let ingredient of ingredients ) {
         listItems += `<li>${ingredient}</li>`;
    }
    return listItems;
}
//toevoegen aan pagina

resultDiv.innerHTML = recipeCard;


});