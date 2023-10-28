const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  countryRouter= require("./countryRouter");
const activityRouter = require("./activityRouter");
const router = Router();

router.use("/country", countryRouter);
router.use("/activity", activityRouter);

module.exports = router;
