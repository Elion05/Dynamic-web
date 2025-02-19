'use strict'

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("knop1").addEventListener("click", function(){
        this.innerText = this.innerText === "lol" ? "tot ziens denk ik" : "lol";
    })
})