import pokemons from "./pokemons.js";
const pokemonContainer = document.getElementById("pokemonContainer");
const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");
const sortBy = document.getElementById("sortBy");
const searchButton = document.getElementById("searchButton");

function generator(pokemon){
    pokemonContainer.innerHTML = '';
    pokemon.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.img}" alt="">
            <p>${pokemon.type}</p>
            <p>${pokemon.weight}</p>
        `;

        pokemonContainer.appendChild(card)
    });
}

generator(pokemons);