const createType = require("../controllers/createType");

const postNewType = async (req, res) => {
  const {typeOne} = req.body;

  try {
    const response = await createType(typeOne);

    res.status(200).json(response);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ "error": error.message });
  }
};

module.exports = postNewType;
