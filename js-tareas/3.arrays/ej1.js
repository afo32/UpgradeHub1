// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones
let arr = [1, 2, 3, 4];
console.log(arr[0]);
console.log(arr.shift());
arr.unshift(1);
console.log(arr.slice(0, 1)[0]);
console.log(arr.splice(0, 1)[0]);
arr.unshift(1);
// ¿Cómo acceder al último elemento de un array? Dime 4 opciones
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.pop());
arr.push(4);
console.log(arr.splice(arr.length - 1, 1)[0]);