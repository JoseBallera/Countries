const axios = require("axios");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const loadCountriesIntoDB = async () => {
  const response = await axios.get("http://localhost:5000/countries");
  const countries = response.data.map(country => ({
    ID: country.cca3,
    Nombre: country.name.official,
    Bandera: country.flags.svg,
    Continente: country.region,
    Capital: country.capital[0],
    Subregion: country.subregion,
    Area: country.area,
    Poblacion: country.population,
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

  // console.log(countries);
  console.log(countries.length);
  if (countries.length === 0) {
    await loadCountriesIntoDB();

    countries = await Country.findAll({
      include: Activity,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    // Convert model instances to plain JavaScript objects
    countries = countries.map(country => country.get());

    //console.log(countries);
  }
  
  return countries;
};


const getCountryByName = async (name) => {
  
  const country = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
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

module.exports = { getAllCountries, getCountryByName, getCountryById };
