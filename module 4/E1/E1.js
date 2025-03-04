"use strict";

class Student{
    constructor(naam,vakken){
        this.naam = naam;
        this.vakken = vakken;
        this.punten = {}
    };
    voegPuntToe(vak,punt){
    //punten toevoegen

    //als het vak nog niet bestaat, voeg het toe aan de vakkenlijst
    if(!this.vakken.includes(vak)){
        this.vakken.push(vak);
        };
    

    //punten opslaan
    this.punten[vak] = punt;
        return `Punt ${punt} toegevoegd voor ${vak}`;
}
    gemiddelde(){  
        //gemiddelde berekenen
        let totaal = 0;
        let aantalVakken = 0;

        for(const vak in this.punten){
            totaal += this.punten[vak];
            aantalVakken++;
        }
        return aantalVakken > 0 ? totaal / aantalVakken : 0;

    };
    toonRapport(){
        //HTML template hier schrijven`<>
        let rapport = `<h2>Rapport voor ${this.naam}</h2>`;
        rapport += `<ul>`;


        for(const vak in this.punten){
            rapport += `<li> ${vak}: ${this.punten[vak]}/20</li>`;
        }
        
        rapport += `</ul>`;
        rapport += `<p>Gemiddelde: ${this.gemiddelde().toFixed(1)}/20</p>`
        return rapport;
    };
}


const student1 = new Student('Jan van Koekel', ["Programmeren", "wiskunde", "Talen"]);
student1.voegPuntToe('wiskunde', 9);
student1.voegPuntToe('Programmeren', 15);
student1.voegPuntToe('Talen', 18);

const student2 = new Student('Pieter zakmes', ["Talen", "ICT"]);
student2.voegPuntToe('Talen', 10);
student2.voegPuntToe("ICT", 11);
student2.voegPuntToe('Natuur', 19)//extra vakken die er nog niet in zitten

const student3 = new Student('Mathis tom', ["Nederlands", "  Frans","Wiskunde", "WO", "Godsdienst"])

student3.voegPuntToe('Nederlands', 18);
student3.voegPuntToe('Frans', 19);
student3.voegPuntToe('Wiskunde', 16);
student3.voegPuntToe('WO',17);
student3.voegPuntToe('Godsdienst', 15);

student1.toonRapport();
student2.toonRapport();
student3.toonRapport();

const output = document.getElementById('output');
output.innerHTML =student1.toonRapport()  + student2.toonRapport() + student3.toonRapport();