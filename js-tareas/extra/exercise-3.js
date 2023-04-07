const movies = [{name: "Your Name", duracion: 130},{name: "Pesadilla antes de navidad", duracion: 225}, {name: "Origen", duracion: 165}, {name: "El señor de los anillos", duracion: 967}, {name: "Solo en casa", duracion: 214}, {name: "El jardin de las palabras", duracion: 40}];

const peliculasPequeñas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

for (let i = 0; i < movies.length; i++) {
    const pelicula = movies[i];
    if (pelicula.duracion < 100) {
        peliculasPequeñas.push(pelicula); 
    } else if (pelicula.duracion >= 100 && pelicula.duracion < 200) {
        peliculasMedianas.push(pelicula);
    } else {
        peliculasGrandes.push(pelicula);
    }
}

console.log("Películas pequeñas: ", peliculasPequeñas);
console.log("Películas medianas: ", peliculasMedianas);
console.log("Películas grandes: ", peliculasGrandes);