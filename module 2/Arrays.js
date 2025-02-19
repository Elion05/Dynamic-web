"use strict";


let playlist = ["Highway to Hell", "Thunderstruck"];

// Toevoegen aan het einde
playlist.push("Back in Black")
console.log(playlist)
// Verwijderen van het einde (dus back in black)
let LastSong = playlist.pop();
console.log(playlist)

//Het toevoegen van iets bij het begin (dus TNT gaat index 0 zijn)
playlist.unshift("TNT");
console.log(playlist)


//Het verwijderen van de eerste 'song' dat in de array zit (dus TNT)
let firstsong = playlist.shift();
console.log(playlist);