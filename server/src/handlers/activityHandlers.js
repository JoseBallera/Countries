const { getAllactivities, createActivity   } = require('../controllers/activityControllers')

const getActivityHandler = async (req, res) => {
	const { activity } = req.query
	try {
		const response =  await getAllactivities(activity)
		return res.status(201).json(response)
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}

const postActivityHandler = async (req, res) => {
	const {
	  ID,
	  Nombre,
	  Dificultad,
	  Duracion,
	  Temporada,
	  
	} = req.body;
	try {
	  const newActivity = await createActivity( 
		ID,
		Nombre,
		Dificultad,
	  	Duracion,
	  	Temporada,
	  
	  )
	  return res
		.status(201)
		.send(`La actividad ${newActivity.Nombre}  ha sido creado correctamente con el ID ${newActivity.ID}`);
	} catch (error) {
	  return res.status(400).json({ error: error.message });
	}
  };
module.exports = {
	getActivityHandler,
	postActivityHandler
}