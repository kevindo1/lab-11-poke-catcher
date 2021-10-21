// get data from LS
// loop through results
// append results to html page

import pokemons from "../pokemon.js";
import { findById, getPokedex } from "../utils.js";

const main = document.getElementById('main');

const results = getPokedex();

for (let item of results) {
    const pokemon = findById(item.id, pokemons);
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = pokemon.url_image; 

    const header = document.createElement('h2');
    header.textContent = pokemon.pokemon;

    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `Encountered: ${item.encountered}`;

    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `Captured: ${item.caught}`;

    div.append(img, header, resultSpan1, resultSpan2);
    main.appendChild(div);
}

console.log('hello world')