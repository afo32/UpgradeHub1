let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;

let arr = [car1, car2]
for (coche of arr) {
    coche.finalPrice = coche.basePrice + globalBasePrice;
    console.log(coche)
}