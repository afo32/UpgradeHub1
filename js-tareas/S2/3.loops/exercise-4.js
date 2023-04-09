const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

for (const juguete of toys) {
    if (juguete.includes("gato")) {
        let indice = toys.indexOf(juguete); 
        toys.splice(indice, 1)
    }
}

console.log(juguete);