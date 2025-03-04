"use strict";



class Bankrekening{
    constructor (rekeningnummer, eigenaar, saldo){
        this._rekeningnummer = 0;
        this._eigenaar = eigenaar;
        this._saldo = 0;
        this.type = "Betaalrekening";
    }
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
        return;
    }else{
        this._saldo += bedrag;
    }
};
//methode om bedrag op te nemen
bedragOpnemen(bedrag) {
    if (bedrag <= 0) {
        console.warn('Opnemen is niet mogelijk.')
        return;
    }
    if (bedrag > this._saldo) {
        console.warn('Onvoldoende saldo');
        return;
    }
    this._saldo -= bedrag;
}


get overzicht () {
    return `Rekening: ${this._rekeningnummer}
            Eigenaar: ${this._eigenaar}
            Saldo: ${this._saldo} euro
    `;
    };
};



//Extends, bijvullen van de andere Bankrekening classe.
class Spaarrekening extends  Bankrekening{
    constructor(rentepercentage){
       super(rekeningnummer,eigenaar,saldo);
        
    }
}