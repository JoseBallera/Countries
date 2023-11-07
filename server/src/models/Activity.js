const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isWithinRange(value) {
            if (value < 1 || value > 5) {
              throw new Error("La dificultad debe ser un número del 1 al 5");
            }
          },
        },
      },

      Duracion: {
        type: DataTypes.INTEGER,
      },
      Temporada: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["Verano", "Otoño", "Invierno", "Primavera"]],
            msg: "La temporada debe ser Verano, Otoño, Invierno o Primavera",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
