const axios = require("axios");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const loadCountriesIntoDB = async () => {
  const response = await axios.get("http://localhost:5000/countries");
  const countries = response.data.map(country => ({
    ID: country.cca3,
    Nombre: country.name.common,
    Bandera: country.flags.svg,
    Continente: country.region,
    Capital: country.capital ? country.capital[0] : 'N/A', // Use conditional chaining here
    Subregion: country.subregion ? country.subregion : 'N/A' ,
    Area: country.area,
    Poblacion: country.population
  }));
  
  await Country.bulkCreate(countries);
};

const getAllCountries = async () => {
  let countries = await Country.findAll({
    include: Activity,
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });

  // Convert model instances to plain JavaScript objects
  countries = countries.map(country => country.get());

  //console.log(countries);
  //console.log(countries.length);
  
  return countries;
};


const getCountryByName = async (name) => {
  
  const country = await Country.findAll({
    where: { Nombre : { [Op.iLike]: `%${name}%` } },
    include: Activity,
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  return country;
};

const getCountryById = async (id) => {
  const idToUppercase = id.toUpperCase();
  console.log(idToUppercase);
  const country = await Country.findByPk(idToUppercase, {
    include: Activity,
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  console.log(country);
  return country;
};

module.exports = { getAllCountries, getCountryByName, getCountryById ,loadCountriesIntoDB};
