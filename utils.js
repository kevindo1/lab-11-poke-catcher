import pokemon from './pokemon.js'

export function findById(id, items) {
    for (let item of items) { 
        if (item.id === id) {
            return item;
        }
    }
}

export function getPokedex() {
    const pokeString = localStorage.getItem('SELECTED') || '[]';
    const pokedex = JSON.parse(pokeString);

    return pokedex;
}

export function setPokedex(id) {
    const pokedex = getPokedex();
    const pokedexItem = findById(id, pokedex);

    if (pokedexItem.id === id) {
        pokedexItem.shown++;
    } else {
        const newItem = { id: id, shown: 1 };
        pokedex.push(newPokemon);
    }
    const stringPokemon = JSON.stringify(pokedex);
    localStorage.setItem('SELECTED', stringPokemon);
}

