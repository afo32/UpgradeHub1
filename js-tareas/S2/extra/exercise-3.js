const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let contadorSonidos = {};

for (let user of users) {
    for (let sonido in user.name) {
        if (contadorSonidos[sonido.name]) {
            contadorSonidos[sonido.name]++;
        } else {
            contadorSonidos[sonido.name] = 1;
        }
    }
}

for (let sonido in contadorSonidos) {
    console.log("El sonido " + sonido + "ha sido agregado " + contadorSonidos[sonido] + "veces como favorito");
}
