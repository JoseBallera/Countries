
const { DataTypes} = require('sequelize')
module.exports = (sequelize) => {
	sequelize.define(
		'Country',
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			Nombre: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			Imagen_de_la_bandera: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Continente: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Capital: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Subregion: {
				type: DataTypes.STRING,
				
			},
			Area: {
				type: DataTypes.INTEGER,
        		
			},
			Poblacion: {
				type: DataTypes.INTEGER,
				allowNull: false,
			}
		},
		{
			timestamps: false,
		}
	)
}