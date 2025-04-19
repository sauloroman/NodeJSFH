const { http } = require('../plugins')

const getPokemonById = async ( id )  => {

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const pokemon = await http.get( url )
    return pokemon.name
  } catch (error) {
    throw new Error(`Pokemon not found: ${error}`)
  }

}

getPokemonById(6)
  .then( console.log )
  .catch( console.error )
  .finally(() => console.log('Here you go your pokemon'))