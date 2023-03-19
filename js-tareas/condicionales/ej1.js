// En una tienda de mascotas hay tres tipos de mascotas, perros, gatos y pájaros.
// Se debe preguntar al usuario cuál es la mascota que quiere,
// enseñando un mensaje personalizado para cada elección.
// Si ninguna se elige, se debe imprimir "Lo siento, no tenemos esa mascota en stock"

let mascota = prompt("¿Qué mascota quieres?", "");
if (mascota == "Perro" || mascota == "Gato" || mascota == "Pájaro") {
  console.log("Has escogido el " + mascota);
} else {
  console.log("Lo siento, no tenemos esa mascota en stock")
}
// let mascota = prompt("¿Qué mascota quieres?", "");

// if (mascota == "Perro") {
//   console.log("Has escogido el perro");
// } else if (mascota == "Gato") {
//   console.log("Has escogido el gato");
// } else if (mascota == "Pájaro") {
//   console.log("Has escogido el pájaro");
// } else {
//   console.log("Lo siento, no tenemos esa mascota en stock");
// }

// if (mascota == "Perro" || mascota == "Gato" || mascota == "Pájaro") {
//   console.log("Has escogido el " + mascota);
// } else {
//   console.log("Lo siento, no tenemos esa mascota en stock");
// }

// let opciones = ["Gato", "Perro", "Pájaro"];

// if (opciones.includes(mascota)) {
//     console.log("Has escogido el " + mascota);
// } else {
//   console.log("Lo siento, no tenemos esa mascota en stock");
// }
