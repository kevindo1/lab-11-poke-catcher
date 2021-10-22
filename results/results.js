// get data from LS
// loop through results
// append results to html page

import pokemons from '../pokemon.js';
import { findById, getPokedex } from '../utils.js';

const main = document.getElementById('main');

const results = getPokedex();

for (let item of results) {
    const caughtPokemon = findById(item.id, pokemons);
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = caughtPokemon.url_image;

    const header = document.createElement('h2');
    header.textContent = caughtPokemon.pokemon;

    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `Encountered: ${item.encountered}`;

    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `Captured: ${item.caught}`;

    const p = document.createElement('p');
    p.append(resultSpan1, resultSpan2);
    div.append(img, header, p);
    main.appendChild(div);
}

const names = results.map((item)=> {
    const pokemon = findById(item.id, pokemons);
    return pokemon.pokemon;
});

const Caught = results.map((item)=> {
    return item.caught;
});

var resultsChart = document.getElementById('results-chart').getContext('2d');

// eslint-disable-next-line no-undef
new Chart(resultsChart, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Caught',
            data: Caught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});