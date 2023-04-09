function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

let lenguajes = ["Javascript", "Python", "Java", "Ruby", "C++"];
console.log(findArrayIndex(lenguajes, "Java"));
console.log(findArrayIndex(lenguajes, "PHP"));

let numeros = [1, 2, 3, 4, 5];
console.log(findArrayIndex(numeros, 3));
console.log(findArrayIndex(numeros, 6));