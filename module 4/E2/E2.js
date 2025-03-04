"use strict";



class Product{
    constructor(naam, prijs, voorraad){
        this.naam = naam;
        this._prijs = 0;  //prive 
        this._voorraad = 0;  //prive
        //setters

        this.prijs = prijs;
        this.voorraad = voorraad;
    }
    get prijs () {
        return this._prijs
    }
    set prijs (value) {
        if (value >= 0 ) {
            this._prijs = value
        } else {
            console.warn('Negatieve prijs niet toegestaan.');
            this._prijs = 0;
        }
    }

    get voorraad () {
        return this._voorraad
        }
        
        set voorraad (value){
            if (value >= 0) {
                this._voorraad = value
            } else {
                console.warn('Negatieve voorraad is niet toegestaan.')
                this._voorraad = 0;
            }
        }
    //Btw berekenen
    get verkoopprijs () {
        return this._prijs * 1.21;
    }
    //Getter die true of false retourneert wanneer de voorraad 0 is
    get beschikbareVoorraad (){
        return this._voorraad > 0; 
    }
    toonInfo(){
        return `
        <div class="product-card">
        <h2>${this.naam}<h2>
        <p>Inkoopprijs: <span class="price">€${this.prijs.toFixed(2)}</span></p>
        <p>verkoopprijs (inclusief btw): <span class="price">€${this.verkoopprijs.toFixed(2)}</span></p>
        <p>Voorraad: ${this.voorraad} stuks</p>
        <p>Status: <span>
            ${this.beschikbareVoorraad ? 'Op voorraad' : 'Niet op voorraad'}
        </span></p>
        </div>
        `
    }
}




const product1  = new Product("Smart TV", 2, 20);
product1.prijs = 122;

const product2  = new Product("Koptelefoon");
product2.prijs = 400;
product2.voorraad = 12;

const product3  = new Product("Apple phone");
product3.prijs = 500;
product3.voorraad = 0;


const output = document.getElementById('output');
output.innerHTML = product1.toonInfo() + product2.toonInfo() + product3.toonInfo();


