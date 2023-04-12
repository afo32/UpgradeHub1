const pokedex = document.getElementById('pokedex');
async function fetchPokemon() {
    for (let i = 1; i <= 150; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      const pokemonInfo = {
        name: pokemon.name,
        image: pokemon.sprites['front_default'],
        type: pokemon.types.map(type => type.type.name).join(', '),
        id: pokemon.id
      };
      displayPokemon(pokemonInfo);
  }
}

function displayPokemon(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon');
  
    const pokemonInnerHTML = `
      <div class="img-container">
        <img src="${pokemon.image}" alt="${pokemon.name}">
      </div>
      <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">Type: <span>${pokemon.type}</span></small>
      </div>
    `;
  
    pokemonCard.innerHTML = pokemonInnerHTML;
    pokedex.appendChild(pokemonCard);
  }
  fetchPokemon();

  const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchPokemon);

function searchPokemon() {
  const searchInput = document.getElementById('searchInput');
  const searchText = searchInput.value.toLowerCase();
  const foundPokemon = pokemonList.find(pokemon => pokemon.name.includes(searchText));
  if (foundPokemon) {
    showPokemonDetails(foundPokemon);
  } else {
    alert('Pokemon no encontrado');
  }
}
function showPokemonDetails(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    image.setAttribute('src', pokemon.image);
    const name = document.createElement('h2');
    name.textContent = pokemon.name;
    const id = document.createElement('p');
    id.textContent = `ID: ${pokemon.id}`;
    const type = document.createElement('p');
    type.textContent = `Type: ${pokemon.type}`;
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(type);
    const pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = '';
    pokedex.appendChild(card);
  }
  
  const pokemonContainer = document.getElementById("pokemon-container");
  const searchInput = document.getElementById("search-input");
  
  const fetchPokemons = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/?limit=150";
      const res = await fetch(url);
      const data = await res.json();
      const results = data.results;
      const pokemons = await Promise.all(
        results.map(async (result) => {
          const res = await fetch(result.url);
          const data = await res.json();
          const pokemon = {
            name: data.name,
            image: data.sprites["front_default"],
            type: data.types.map((type) => type.type.name).join(", "),
            id: data.id.toString(),
          };
          return pokemon;
        })
      );
      displayPokemons(pokemons);
    } catch (error) {
      console.log(error);
    }
  };
  
  const displayPokemons = (pokemons) => {
    pokemonContainer.innerHTML = "";
    pokemons.forEach((pokemon) => {
      createPokemonCard(pokemon);
    });
  };
  
  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
  }  