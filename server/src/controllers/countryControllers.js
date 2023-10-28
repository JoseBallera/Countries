const axios = require("axios");
const { Country , Activity} = require("../db.js");
const { Op } = require("sequelize");

const loadCountriesIntoDB = async () => {
  const response = await axios.get('http://localhost:5000/countries');
  const countries = response.data.map(country => ({
    ID: country.cca3,
    Nombre: country.name.official,
    Bandera: country.flags.svg,
    Continente: country.region,
    Capital: country.capital,
    Subregion: country.subregion,
    Area: country.area,
    Poblacion: country.population
  }));
  await Country.bulkCreate(countries);
};

 loadCountriesIntoDB();

const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: Activity,
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
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
  const country = await Country.findByPk(id, {
    include: Activity,
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  return country;
};



module.exports = { getAllCountries, getCountryByName, getCountryById };
