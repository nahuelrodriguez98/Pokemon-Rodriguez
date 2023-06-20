const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");
const cleanPokemonApi = require("../helpers/cleanPokemonApi")

const findByName = async (name) => {
  const nameSearch = name.trim().toLowerCase();
  const pokemonsDb = await Pokemon.findAll({
    where: { name: { [Op.iLike]: nameSearch } },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        as: "types",
      },
    },
  });

  const pokemonNameDb = pokemonsDb.map(pokemon => {
    const { types } = pokemon;
    const formattedTypes = types.map(type => type.name).flat().sort().join(', ');
    return { ...pokemon.toJSON(), types: formattedTypes };
  });

  const pokemonsFilterApiRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.trim().toLowerCase()}`)).data;
  const pokemonsFilterApi = cleanPokemonApi([pokemonsFilterApiRaw])

  if (!pokemonNameDb.length && !pokemonsFilterApi.length) throw new Error("This pokemon doesn't exist")

  return [...pokemonNameDb, ...pokemonsFilterApi];
};

module.exports = findByName;