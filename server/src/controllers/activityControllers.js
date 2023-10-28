const axios = require("axios");
const { Activity, Country } = require("../db");


const getAllActivities = async () => {
  let allActivities = await Activity.findAll();
  if (allActivities.length === 0) {
    const response = await axios.get('localhost:5000/countries');
    allActivities = response.data.results.map((activity) => ({
      Nombre: activity.name,
    }));
    await Activity.bulkCreate(allActivities);
  }
  return allActivities;
};


const createActivity = async (activityData) => {
  const { ID, Nombre, Dificultad, Duracion, Temporada, countries } = activityData;

  // Crear la actividad
  const newActivity = await Activity.create({
    id: ID,
    name: Nombre,
    difficulty: Dificultad,
    duration: Duracion,
    season: Temporada
  });

  // Asociar la actividad con los países
  const targetCountries = await Country.findAll({
    where: { name: countries },
  });
  await newActivity.addCountry(targetCountries);

  return newActivity;
};
module.exports = {getAllActivities, createActivity}