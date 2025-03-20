"use strict";


// Functie om een array met willekeurige getallen te genereren
const generateRandomArray = (size) => { 
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 1000));
    }
    
    return array;
};


console.time('bubbleSort Time')
// Bubblesort implementatie (inefficiënt)
const bubbleSort = (arr) => {
    const result = Array.from(arr);
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Verwissel elementen
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
};
console.timeEnd('bubbleSort Time')


console.time('nativeSort Time')
// Gebruik JavaScript's ingebouwde sort
const nativeSort = (arr) => {
    const result = Array.from(arr);
    return result.sort((a, b) => a - b);
};
console.timeEnd('nativeSort Time')

document.getElementById('compareButton').addEventListener('click', () => {
    const testArray = generateRandomArray(5000);
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';


    console.time('bubbleSort Time');
    bubbleSort(testArray);
    console.timeEnd('bubbleSort Time');


    console.time('nativeSort Time');
    nativeSort(testArray);
    console.timeEnd('nativeSort Time');
});