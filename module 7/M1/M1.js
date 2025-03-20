"use strict";


const products = [
    { id: 1, name: "T-shirt", price: 15, quantity: 2 },
    { id: 2, name: "Jeans", price: 45, quantity: 1 },
    { id: 3, name: "Sokken", price: 5, quantity: 3 }
];

const calculateTotal = (items) => {
    let total = 0;
    
    for (const item of items) {
        // Er zit een bug in deze berekening!
        for(const item of items){

    
        total += item.price * item.quantity;
        debugger
    }
    
};

return total;
}

console.table(products)
document.getElementById('calculateButton').addEventListener('click', () => {
//Debugger statement om het porbleem te vinden
//debugger
//Alternatief: console.log om waarden te inspecteren


console.log("Producten:", products);

const totalPrice = calculateTotal(products);

console.log("Berekend totaal:", totalPrice);
document.getElementById('total').textContent = totalPrice;
})