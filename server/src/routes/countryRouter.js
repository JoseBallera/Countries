const { Router } = require("express");
const {
  getCountryHandler,
  getCountryByNameHandler,
  getCountryByIdHandler,
} = require("../handlers/countryHandlers");
const countryRouter = Router();

countryRouter.get("/", getCountryHandler);
countryRouter.get("/name", getCountryByNameHandler);
countryRouter.get("/:id", getCountryByIdHandler);

module.exports = countryRouter;
