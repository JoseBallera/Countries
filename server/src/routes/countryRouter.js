const { Router } = require("express");
const {
  getCountryHandler,
  getCountryByNameHandler,
  getCountryByIdHandler,
} = require("../handlers/countryHandlers");
const countryRouter = Router();

countryRouter.get("/", getCountryHandler);
countryRouter.get("/:id", getCountryByIdHandler);
countryRouter.get("/name", getCountryByNameHandler);
module.exports = countryRouter;
