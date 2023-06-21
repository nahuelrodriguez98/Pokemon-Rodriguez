const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");
const cleanPokemonApi = require("../helpers/cleanPokemonApi")

const findByName = async (name) => {
  const nameSearch = name.trim().toLowerCase();//Elimina los espacios en blanco al in y fin del nombre.
  const pokemonsDb = await Pokemon.findAll({
    where: {
      name: { [Op.iLike]: nameSearch }
    },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        as: "types",//Alias
      },
    },
  });

  const pokemonNameDb = pokemonsDb.map(pokemon => {
    const { types } = pokemon;
    const formattedTypes = types.map(type => type.name).flat().sort().join(', ');
    return {
      ...pokemon.toJSON(),
      types: formattedTypes
    };
  });//Formateo los datos de los pokémons obtenidos de la base de datos para que cumplan con el formato deseado.

  const pokemonsFilterApiRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.trim().toLowerCase()}`)).data;
  const pokemonsFilterApi = cleanPokemonApi([pokemonsFilterApiRaw])

  if (!pokemonNameDb.length && !pokemonsFilterApi.length) throw new Error("This pokemon doesn't exist")
  //Si no se encuentra en la DB y la Api devolvemos un error.
  return [...pokemonNameDb, ...pokemonsFilterApi];
};

module.exports = findByName;