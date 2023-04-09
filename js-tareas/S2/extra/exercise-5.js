function rollDice(numCaras) {
    return Math.floor(Math.random() * numCaras) + 1; 
}

console.log(rollDice(6));
console.log(rollDice(12));
console.log(rollDice(20));