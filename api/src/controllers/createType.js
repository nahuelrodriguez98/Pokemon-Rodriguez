const { Type } = require("../db");
const { Op } = require("sequelize");

const createType = async (pokemonType) => {

  const {typeOne} = pokemonType;

  const pokemonTipo = await Type.findAll({
      where: {
        type: {
            [Op.iLike]: `${typeOne}`,  //Condiciono que el name del nuevo pokemon no sea igual a alguno de la DB o lo contenga. 
        }
     }
    })

  if(pokemonTipo.length) throw new Error("There is already a type.");
    
  const newType = await Type.create({typeOne});
  //Creo un nuevo pokemon con los valores ingresados por parametro
  
await newType.addType(eachType)

  return newType;
};

module.exports = createType;