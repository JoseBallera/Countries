const axios = require("axios");
const server = require("./src/server");
const { loadCountriesIntoDB } = require("./src/controllers/countryControllers");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(async() => {
await loadCountriesIntoDB();
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
