const pokemonCount = 28;

const pokemonContainer = document.getElementById('pokemon-container');
const pokemonInfo = document.getElementById('pokemon-info');

function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const img = document.createElement('img');
    img.src = pokemon.image;
    img.alt = pokemon.name;

    const name = document.createElement('div');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name;

    card.appendChild(img);
    card.appendChild(name);

    card.addEventListener('click', () => displayPokemonInfo(pokemon));

    pokemonContainer.appendChild(card);
}

async function getPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return {
        name: data.name,
        image: data.sprites.front_default,
        weight: data.weight, 
        height: data.height, 
        types: data.types.map(type => type.type.name),
        abilities: data.abilities.map(ability => ability.ability.name), 
    };
}

async function displayPokemons() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}`);
        const data = await response.json();
        const promises = data.results.map(pokemon => getPokemonData(pokemon.url));
        const pokemons = await Promise.all(promises);
        pokemons.forEach(pokemon => createPokemonCard(pokemon));
    } catch (error) {
        console.error('Error:', error);
        pokemonContainer.innerHTML = '<p>Happened error.</p>';
    }
}

function displayPokemonInfo(pokemon) {
    pokemonInfo.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p><strong>Weight:</strong> ${pokemon.weight} kg</p>
        <p><strong>Height:</strong> ${pokemon.height} m</p>
        <p><strong>Type:</strong> ${pokemon.types.join(', ')}</p>
        <p><strong>Abilities:</strong> ${pokemon.abilities.join(', ')}</p>
    `;
    pokemonInfo.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', displayPokemons);
