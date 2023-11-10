
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

// const getAllActivities = async () => {
//   let allActivities = await Activity.findAll();
//   if (allActivities.length === 0) {
//     return 'No hay actividades. Por favor, crea una nueva actividad.';
//   }
//   return allActivities;
// };

const getAllActivities = async () => {
  let allActivities = await Activity.findAll({
    include: {
      model: Country,
      through: { attributes: [] }, // Esto evitará que se incluyan los atributos de la tabla intermedia
      attributes: ['Nombre'] // Solo incluye la propiedad 'Nombre' de los países
    }
  });
  
  if (allActivities.length === 0) {
    return 'No hay actividades. Por favor, crea una nueva actividad.';
  }
  
  // Mapear los países a sus nombres
  allActivities = allActivities.map(activity => {
    activity = activity.get({ plain: true }); // Esto convierte la instancia de Sequelize en un objeto simple
    activity.Countries = activity.Countries.map(country => country.Nombre);
    return activity;
  });

  return allActivities;
};





const createActivity = async (activityData) => {
  const { ID, Nombre, Dificultad, Duracion, Temporada, countries } = activityData;

  // Check if an activity with the same name already exists
  const existingActivity = await Activity.findOne({ where: { Nombre } });
  if (existingActivity) {
    throw new Error('An activity with this name already exists.');
  }

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
    where: {
      Nombre: { [Op.in]: countries } 
    }
  });
  await newActivity.addCountry(targetCountries);

  return newActivity;
};

module.exports = {getAllActivities, createActivity}