const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    const answer = callback(description);
    userAnwsers.push(answer);
}

father("¿Estás de acuerdo con los términos y condiciones?", confirmExample);
father("¿Cuál es tu nombre?", promptExample);

console.log(userAnwsers);