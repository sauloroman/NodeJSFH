//* 1
// const getPokemonById = ( id, fn ) => {
// const url = `https://pokeapi.co/api/v2/pokemon/${id}`

//   fetch( url )
//     .then( response => {
//       response.json().then( pokemon => {
//         console.log(pokemon.name)
//         fn( pokemon.name )
//       })
//     })
// }

// const getPokemonById = (id, fn) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   fetch(url)
//     .then((resp) => resp.json())
//     .then((pokemon) => fn(pokemon.name));
// };

// getPokemonById(1, (pokemonName) => {
//   console.log({ pokemonName });
// });

//* 2
// const getPokemonById = (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   return fetch(url)
//     .then((resp) => resp.json())
//     // .then( () => {throw new Error('Pokemon not found')} )
//     .then((pokemon) => pokemon.name )

// };

// getPokemonById(4)
//   .then( console.log )
//   .catch( console.error )
//   .finally(() => console.log('Operacion realizada'))


//* 3

// const getPokemonById = async ( id ) => { 
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
 
//   try {
//     const resp = await fetch( url )
//     const pokemon = await resp.json()
//     return pokemon.name
//   } catch (error) {
//     throw new Error('Pokemon not found')
//   }

// }

// getPokemonById(40)
//   .then( console.log )
//   .catch( console.error )
//   .finally(() => console.log('Operacion realizada'))