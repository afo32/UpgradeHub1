const numbersList = [];

function sum(a, b){
  return a + b;
}

function substract(a, b){
  return a - b;
}

function father(a, b, callback){
  const result = callback(a, b);
  numbersList.push(result);
}

father(5, 3, sum);
father(10, 2, substract);
father(7, 2, sum);
father(8, 4, substract);

console.log(numbersList);