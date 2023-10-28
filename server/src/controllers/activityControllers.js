const axios = require("axios");
const { Activity } = require("../db");


const getAllActivities = async () => {
  let allActivities = await Activity.findAll();
  if (allActivities.length === 0) {
    const response = await axios.get('localhost:5000');
    allActivities = response.data.results.map((activity) => ({
      Nombre: activity.name,
    }));
    await Activity.bulkCreate(allactivities);
  }
  return allActivities;
};

module.exports = {getAllActivities}