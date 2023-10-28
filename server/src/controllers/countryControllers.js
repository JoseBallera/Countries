const axios = require("axios");
const { Country } = require("../db.js");
const { Op } = require("sequelize");


const getAllCountries = async () => {
 return 1
};

const getCountryByName = async (name) => {
 return 2
};

const getCountryById = async (id) => {
  return 3
};



module.exports = { getAllCountries, getCountryByName, getCountryById };
