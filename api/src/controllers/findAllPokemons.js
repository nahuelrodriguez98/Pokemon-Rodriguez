const { Pokemon, Type } = require("../db");
const axios = require("axios");
const cleanPokemon = require("./cleanPokemon");

const findAllPokemons = async () => {
  const pokemonsAllDB = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      as: 'types'
    }
  })

  const pokemonsDB = pokemonsAllDB.map((pokemon) => {
    const { name, types } = pokemon;
    const formattedTypes = types.map(({ name }) => name).flat().sort().join(', ');
    return { ...pokemon.toJSON(), types: formattedTypes };
  });

  const apiUrl = (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`))
  const response = apiUrl.data.results?.map(e => axios.get(e.url))

  const responseAPI = await axios.all(response)
  const apiPokemons = cleanPokemon(responseAPI)

  return [...pokemonsDB, ...apiPokemons];
};

module.exports = findAllPokemons;
