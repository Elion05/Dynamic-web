"use strict";



class Bankrekening{
    constructor  (eigenaar, saldo){
        this._rekeningnummer = Bankrekening.rekeningNrGenerator();
        this._eigenaar = eigenaar;
        this._saldo = saldo;
        this.type = "Betaalrekening";
    }

    static rekeningNrGenerator (){
        return Math.floor(Math.random() *(999999999 - 100000000 + 1)) + 1000000000 
     };
     get rekeningnummer(){
         return this._rekeningnummer;
     };
    //getters voor toegang tot private properties
    get rekeningnummer () {
        return this._rekeningnummer;
    }
    get eigenaar () {
        return this._eigenaar;
    }
    get saldo () {
        return this._saldo;
    }
    set saldo (value) { 
        if(value < 0){
            this._saldo = value;
        } else {
            throw new Error("Ongeldige saldo");
        }
    }

    //methode om te storten in de saldo
bedragStorten(bedrag) {
    if (bedrag <= 0) {
        console.warn('Je stort niets in')
        return false;
    }else{
        this._saldo += bedrag;
        return true;
    }
};
//methode om bedrag op te nemen
bedragOpnemen(bedrag) {
    if (bedrag <= 0) {
        console.warn('Opnemen is niet mogelijk.')
        return false;
    }
    if (bedrag > this._saldo) {
        console.warn('Onvoldoende saldo');
        return true;
    }
    this._saldo -= bedrag;
    return true;
}


get overzicht () {
    return `Rekening: BE${this._rekeningnummer}
            Eigenaar: ${this._eigenaar}
            Saldo: ${this._saldo} euro
    `;
    };
};

//Extends, bijvullen van de andere Bankrekening classe.
class Spaarrekening extends  Bankrekening{
    constructor(rekeningnummer,saldo,eigenaar,rentepercentage){
       super(rekeningnummer,eigenaar,saldo);
        this._rentepercentage = rentepercentage
        this.type = "Spaarrekening"
    };
   get rentepercentage() {
    return this._rentepercentage;
   }
   set rentepercentage(percentage){
    if(percentage < 0){
        console.warn('rentepercentagee kan niet negatief zijn');
    }else{
        this._rentepercentage = percentage;
    }
   }
   get overzicht () {
    return `
        ${super.overzicht}
        Rentepercentage: ${this._rentepercentage}%
    `;
   }
   renteToevoegen(){
    const renteBedrag = this.saldo * (this._rentepercentage / 100);
    const resultaat = this.bedragStorten(renteBedrag)

    return resultaat;
   }
};


const rekening1 = new Bankrekening("Jan Berkmans", 500)

alert(rekening1.overzicht);


