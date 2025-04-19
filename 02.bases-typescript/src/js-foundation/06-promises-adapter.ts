import { httpClient } from "../plugins";

export const getPokemonById = async ( id: string | number ): Promise<string>  => {

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const pokemon = await httpClient.get( url )
    return pokemon.name
  } catch (error) {
    throw `Pokemon not found with id: ${id}`
  }

}

// getPokemonById(6)
//   .then( console.log )
//   .catch( console.error )
//   .finally(() => console.log('Here you go your pokemon'))