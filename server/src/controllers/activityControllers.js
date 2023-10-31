
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const getAllActivities = async () => {
  let allActivities = await Activity.findAll();
  if (allActivities.length === 0) {
    return 'No hay actividades. Por favor, crea una nueva actividad.';
  }
  return allActivities;
};



const createActivity = async (activityData) => {
  const { ID, Nombre, Dificultad, Duracion, Temporada, countries } = activityData;

  // Crear la actividad
  const newActivity = await Activity.create({
    ID: ID,
    Nombre: Nombre,
    Dificultad: Dificultad,
    Duracion: Duracion,
    Temporada: Temporada
  });

  // Asociar la actividad con los países
  const targetCountries = await Country.findAll({
    Nombre: { [Op.in]: countries } 
  });
  await newActivity.addCountry(targetCountries);

  return newActivity;
};
module.exports = {getAllActivities, createActivity}