const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

for (let i = 0; i < products.length; i++) {
    const movie = products[i];
    if (movie.sellCount > 20) {
        goodProducts.push(movie);
    } else {
        badProducts.push(movie);
    }
}

console.log("Películas con más de 20 ventas: ", goodProducts);
console.log("Películas con menos de 20 ventas: ", badProducts);