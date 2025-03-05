"use strict";

document.addEventListener('DOMContentLoaded' , () => {

    const startButton = document.getElementById('startButton');
    
    //een fucntie die de achtergrondkleur verandert met callbacks

    function startKleurencascade() {
        //verander naar rood
        document.body.style.backgroundColor = 'red';
        console.log('Achtergrond is nu rood');

        //na 1 seconde naar groen

        setTimeout(() => {
            document.body.style.backgroundColor = 'green';
            console.log('achtergrond is nu groen');

            //na nog een seconde naar blauw
            setTimeout(() => {
                document.body.style.backgroundColor = 'blue';
                console.log('achtergrond is nu blue');

                //terug naar normaal na nog een seconde
                setTimeout(() => {
                    document.body.style.backgroundColor = 'black'
                    console.log('achtergrond is nu zwart')

                    setTimeout(() => {
                        document.body.style.backgroundColor = '';
                        console.log('Kleurencascade voltooid')
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
    //event listener voor de knop
    startButton.addEventListener('click', startKleurencascade)
})
