// import functions and grab DOM elements
import pokemons from './pokemon.js';
import { encounterPokemon, caughtPokemon } from './utils.js';
// initialize global state

const poke1Img = document.getElementById('poke-1-img');
const poke2Img = document.getElementById('poke-2-img');
const poke3Img = document.getElementById('poke-3-img');
const poke1Radio = document.getElementById('poke-radio-1');
const poke2Radio = document.getElementById('poke-radio-2');
const poke3Radio = document.getElementById('poke-radio-3');
const button = document.getElementById('submit-button');

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const generatePokemon = ()=> {
    let randPoke1 = Math.floor(Math.random() * pokemons.length);
    let randPoke2 = Math.floor(Math.random() * pokemons.length);
    let randPoke3 = Math.floor(Math.random() * pokemons.length);

    while (
      randPoke1 === randPoke2 || 
      randPoke1 === randPoke3 ||
      randPoke2 === randPoke3
    ) {
      randPoke1 = Math.floor(Math.random() * pokemons.length);
      randPoke2 = Math.floor(Math.random() * pokemons.length);
      randPoke3 = Math.floor(Math.random() * pokemons.length);
    }

    let poke1 = pokemons[randPoke1];
    encounterPokemon(poke1.id);
    poke1Img.src = poke1.url_image;
    poke1Radio.value = poke1.id;

    let poke2 = pokemons[randPoke2];
    encounterPokemon(poke2.id);
    poke2Img.src = poke2.url_image;
    poke2Radio.value = poke2.id;

    let poke3 = pokemons[randPoke3];
    encounterPokemon(poke3.id);
    poke3Img.src = poke3.url_image;
    poke3Radio.value = poke3.id;
};

let totalPlays = 0; 
generatePokemon();
encounterPokemon();

button.addEventListener('click', ()=> {
    if (totalPlays >= 10) {
        window.location.href='./results/index.html';
    } else {
      totalPlays++;
    }

    const chosenRadio = document.querySelector('input[type=radio]:checked');

    if (chosenRadio) {
      const chosenId = Number(chosenRadio.value);
      caughtPokemon(chosenId);
    }

    console.log(chosenRadio);
    generatePokemon();
});

// for (let pokemon of pokemons) {
//     button.addEventListener('click', ()=> {
//         showPokemon(pokemon.id);
//     })
// };
