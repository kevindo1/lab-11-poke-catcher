// import functions and grab DOM elements
import pokemons from './pokemon.js';
// initialize global state

const poke1Img = document.getElementById('poke-1-img');
const poke2Img = document.getElementById('poke-2-img');
const poke3Img = document.getElementById('poke-3-img');
const button = document.getElementById('submit-button');

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const encounterPokemon = ()=> {
    let randPoke1 = Math.floor(Math.random() * pokemon.length);
    let randPoke2 = Math.floor(Math.random() * pokemon.length);
    let randPoke3 = Math.floor(Math.random() * pokemon.length);

    while (
      randPoke1 === randPoke2 || 
      randPoke1 === randPoke3 ||
      randPoke2 === randPoke3
    ) {
      randPoke1 = Math.floor(Math.random() * pokemon.length);
      randPoke2 = Math.floor(Math.random() * pokemon.length);
      randPoke3 = Math.floor(Math.random() * pokemon.length);
    }

    let poke1 = pokemons[randPoke1];
    poke1Img.src = poke1.url_image;

    let poke2 = pokemons[randPoke2];
    poke2Img.src = poke2.url_image;

    let poke3 = pokemons[randPoke3];
    poke3Img.src = poke3.url_image;
};

let totalPlays = 0; 
encounterPokemon();

button.addEventListener('click', ()=> {
    if (totalPlays >= 10) {
        window.location.href='./results/index.html';
    } else {
      totalPlays++;
    }
    encounterPokemon();
});




