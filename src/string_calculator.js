// Funktion, die ein Array mit 4 bis 6 Zufallszahlen von 1 bis 6 erzeugt
function generateRandomArray() {
    const length = Math.floor(Math.random() * 3) + 4; // Länge zwischen 4 und 6
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 6) + 1); // Zahl zwischen 1 und 6
    }
    return array;
}

// Funktion, die das Array auswertet und die Summe der spezifischen Regeln berechnet
function calculateSum(array) {
    let sum = 0;
    for (const number of array) {
        if (number === 3) {
            sum += 2;
        } else if (number === 5) {
            sum += 4;
        }
    }
    return sum;
}

// Hauptlogik
const array = generateRandomArray();
console.log('Array:', array);
const result = calculateSum(array);
console.log('Summe der spezifischen Regeln:', result);
