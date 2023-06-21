const axios = require("axios");
const { Pokemon, Type } = require("../db");
const cleanPokemonApi = require("../helpers/cleanPokemonApi");

const findPokemonById = async (id, source) => {
  if (source === "DB") {
    const pokemonDB = await Pokemon.findByPk(id, { //Busca un Pokemon por su clave primaria id
      include: {
        model: Type,
        attributes: ["name"],
        as: "types",//Alias
      }
    });

    if (!pokemonDB) {
      throw new Error("Pokemon not found in the database");
    }

    const { types } = pokemonDB;
    const formattedTypes = types.map(type => type.name).flat().sort().join(', ');
    //Formateo el nombre de los tipos, convirtiéndolos en una cadena separada por comas.

    return [{
       ...pokemonDB.toJSON(), 
       types: formattedTypes 
      }];

  } else if (source === "API") {
    const pokemonApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
    const cleanInfo = cleanPokemonApi([pokemonApi]);

    if (!cleanInfo.length) {
      throw new Error("Pokemon not found in the API");
    }

    return cleanInfo;
  }
};

module.exports = findPokemonById;