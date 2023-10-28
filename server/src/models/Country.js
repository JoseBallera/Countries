
const { DataTypes} = require('sequelize')
module.exports = (sequelize) => {
	sequelize.define(
		'Country',
		{
			ID: {
				type: DataTypes.STRING(3),
				allowNull: false,
				primaryKey: true,
			},
			Nombre: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			Bandera: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			Continente: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Capital: {
				type: DataTypes.STRING,
				//allowNull: false,
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