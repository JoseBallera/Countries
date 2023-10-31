const {
  getAllCountries,
  getCountryByName,
  getCountryById,
  
} = require("../controllers/countryControllers");

const getCountryHandler = async (req, res) => {
  
  try {
    const response =  await getAllCountries();
    return res.status(200).json(response);
    //return res.send('estas en la ruta de getVideogames')
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getCountryByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getCountryById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const getCountryByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await getCountryByName(name);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

}


module.exports = { getCountryHandler, getCountryByIdHandler , getCountryByNameHandler};
