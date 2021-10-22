// IMPORT MODULES under test here:
// import { example } from '../example.js';
import pokemons from '../pokemon.js';
import { findById, getPokedex, encounterPokemon, caughtPokemon } from '../utils.js';

const test = QUnit.test;

test('findById should return the pokemon information', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, pokemons);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('getPokedex should return the pokemon information', (expect) => {
    localStorage.removeItem('RESULTS');
    const expected = [
        { id: '1', name: 'bulbasaur', encountered: '1', caught: '0' }
    ];

    localStorage.setItem('RESULTS', JSON.stringify(expected));

    const actual = getPokedex();
    expect.deepEqual(actual, expected);
});

// test('setPokedex should return the pokemon information', (expect) => {
//     localStorage.removeItem('SELECTED');
//     const testCart = [
//         { id: '1', shown: 1 }
//     ]

//     localStorage.setItem('CART', JSON.stringify(testCart));
//     setPokedex('1');
//     const actual = getPokedex();
//     expect.deepEqual(actual, testCart);
// });

test('encounterPokemon increments the shown key when the item exists in results', (expect)=> {
    localStorage.removeItem('RESULTS');
    const testPokedex = [];
    localStorage.setItem('RESULTS', JSON.stringify(testPokedex));
    encounterPokemon(1);
    const actual = getPokedex();
    const expected = [
        { id: 1, encountered: 1, caught: 0 }
    ];
    expect.deepEqual(actual, expected);
});

test('encounterPokemon increments the shown key when the item exists in results', (expect)=> {
    localStorage.removeItem('RESULTS');
    const testPokedex = [
        { id: 1, encountered: 1, caught: 0 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(testPokedex));
    encounterPokemon(1);
    const actual = getPokedex();
    const expected = [
        { id: 1, encountered: 2, caught: 0 }
    ];
    expect.deepEqual(actual, expected);
});

test('caughtPokemon increments when caught', (expect)=> {
    localStorage.removeItem('RESULTS');
    const testPokedex = [
        { id: 1, encountered: 1, caught: 0 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(testPokedex));
    caughtPokemon(1);
    const actual = getPokedex();
    const expected = [
        { id: 1, encountered: 1, caught: 1 }
    ];
    expect.deepEqual(actual, expected);
});