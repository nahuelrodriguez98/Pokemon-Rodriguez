const { Type } = require("../db");
const {findTypes, saveTypeBDD} = require("../controllers/findTypes");

const getTypes = async (req, res) => {
  try {
    const types = await findTypes()//Obtengo los tipos d pokemones de la api
    await saveTypeBDD(types)//paso los tipos obtenidos y los guardo en db
    
    const allTypes = await Type.findAll()//obtengo los tipos de la db

   return res.status(200).send(allTypes);
  } catch (error) {
    res.status(500).json({ "error": error.message });
  }
};
module.exports =  getTypes ;
