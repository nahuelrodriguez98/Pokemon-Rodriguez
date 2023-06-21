const { Pokemon, Type } = require("../db");
const axios = require("axios");
const cleanPokemon = require("./cleanPokemon");

const findAllPokemons = async () => {
  const pokemonsAllDB = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      as: 'types'//Alias
    }
  })//Traemos todos los pokemones de la DB

  const pokemonsDB = pokemonsAllDB.map((pokemon) => {
    const { name, types } = pokemon;
    const formattedTypes = types.map(({ name }) => name).flat().sort().join(', ');
    return { 
      ...pokemon.toJSON(), 
      types: formattedTypes 
    };
  });//Formateo los datos de los pokémons obtenidos de la base de datos para que cumplan con el formato deseado.

  const apiUrl = (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`))
  const response = apiUrl.data.results?.map(element => axios.get(element.url))

  const responseAPI = await axios.all(response)
  const apiPokemons = cleanPokemon(responseAPI)
  //Traemos los pokemones de la Api (150) y los organizamos con cleanPokemon
  return [...pokemonsDB, ...apiPokemons];
  //Combino los pokemones de la DB y la API en un solo array
};

module.exports = findAllPokemons;
