function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

function removeItem(array, text) {
    let index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

let lenguajes = ["JavaScript", "Python", "Java", "Ruby", "C++"];
console.log(removeItem(lenguajes, "Java"));

let numeros = [1, 2, 3, 4, 5];
console.log(removeItem(numeros, 3));

let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
console.log(removeItem(colores, "Rosado"));