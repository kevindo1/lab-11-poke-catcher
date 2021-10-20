# Poke-Catcher 

### HTML 
* Two pokemon images
* Submit button 

### JS 
* encounterPokemon()
    * encounter 3 random pokemon
    * call showPokemon for each pokemon encountered 
    * render 3 Pokemon to show up on the page

### Local Storage
* const results = [
    { id: 'charizard', shown: 2, picked: 2 },
    { id: 'blastoise', shown: 2, picked: 1 },
    { id: 'ivysaur', shown: 2, picked: 1 },
]
* getResults -- return the results array or empty array
* showPokemon -- ++ shown key for pokemon
* pickPokemon -- ++ picked key for pokemon 

### When Page Loads
* Total plays = 0
* Call encounterPokemon()

### When User Clicks
* Total plays++
* call pickPokemon with the chosen pokemon
* if total plays >= 10, send to results page, else call encounterPokemon()

