import { getPokemonById } from "../../src/js-foundation/06-promises-adapter";

describe('Tests in getPokemonById', () => {

  test('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1
    const pokemonName = await getPokemonById( pokemonId )
    expect( pokemonName ).toBe('bulbasaur')
  })

  test('it should return an error if pokemon does not exist', async () => {
    const pokemonId = 2e6

    try {
      await getPokemonById( pokemonId )
      expect( true ).toBeFalsy()
    } catch (error) {
      expect( error ).toBe(`Pokemon not found with id: ${pokemonId}`)
    }
  })

})