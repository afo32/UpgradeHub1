function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    return array;
}

let myArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
swap(myArray, "Mesirve", "Fernando Muralla");
console.log(myArray);