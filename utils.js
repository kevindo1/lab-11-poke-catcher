export function findById(id, items) {
    for (let item of items) { 
        if (item.id === id) {
            return item;
        }
    }
}

export function getPokedex() {
    const pokeString = localStorage.getItem('RESULTS') || '[]';
    const pokedex = JSON.parse(pokeString);

    return pokedex;
}

export function encounterPokemon(id) {
    let pokedex = getPokedex();
    let pokedexItem = findById(id, pokedex);

    if (pokedexItem) {
        pokedexItem.encountered++;
    } else {
        const newPokemon = { id: id, encountered: 1, caught: 0 };
        pokedex.push(newPokemon);
    }
    const stringPokemon = JSON.stringify(pokedex);
    localStorage.setItem('RESULTS', stringPokemon);
}

export function caughtPokemon(id) {
    let pokedex = getPokedex();
    let caughtPoke = findById(id, pokedex);
    
    caughtPoke.caught++;

    localStorage.setItem('RESULTS', JSON.stringify(pokedex));
}
