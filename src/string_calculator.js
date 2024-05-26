// Electrons around the Cores = "Petals Around the Rose" Kata
// https://en.wikipedia.org/wiki/Petals_Around_the_Rose

// Zahlen bekommen bestimmte Werte, Solution:
// 1 = 0
// 2 = 0
// 3 = 2
// 4 = 0
// 5 = 4
// 6 = 0

function calculateSum(arr) {
    const lookup = [0, 0, 2, 0, 4, 0];
    
    return arr.reduce((acc, num) => {
        return acc + lookup[num - 1];
    }, 0);

    
}