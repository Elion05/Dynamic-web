 //dit is met de Id element, je kan deze maken met de getElementById//
 let mijndiv1 = document.getElementById('div');
 mijndiv1.style.backgroundColor = 'yellow';
 //deze maakt gebruik van de classe naam dat je geef, getElementByClasseName//
 let mijndivclass= document.getElementsByClassName('div');
 for(let element of mijndivclass){
     element.style.backgroundColor = 'red'
 }
//deze maakt gebruik van de tag in je html zoals bijvoorbeeld 'p'//
let tagelement = document.getElementsByTagName('p');
for(let element of tagelement){
    element.style.backgroundColor = 'green'
}
