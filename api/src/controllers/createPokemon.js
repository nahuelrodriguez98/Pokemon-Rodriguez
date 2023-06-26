const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

const createPokemon = async (pokemonData) => {
  const { id, name, image, hp, attack, defense, speed, height, weight, typeOne, typeTwo } = pokemonData;

  const pokemonExist = await Pokemon.findAll({
      where: {
        name: {
            [Op.iLike]: `${name}`,  //Condiciono que el name del nuevo pokemon no sea igual a alguno de la DB o lo contenga. 
        }
     }
    })

  if(pokemonExist.length) throw new Error("There is already a pokemon with that name.");
    
  const newPokemon = await Pokemon.create({id,name,image,hp,attack,defense,speed,height,weight});
  //Creo un nuevo pokemon con los valores ingresados por parametro
  
  const types = [ typeOne, typeTwo === null || typeTwo === undefined ? '' 
  : typeTwo ]//Si la variable "typeTwo" es null o undefined asigna una cadena vacía ('') como segundo elemento de "types". De lo contrario, asigna el valor de "typeTwo".
 
  for (const type of types) {
    const eachType = await Type.findOne({
        where: {
          name: type
        }
    })

await newPokemon.addType(eachType)
}
  return newPokemon
};

module.exports = createPokemon;
