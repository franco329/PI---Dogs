const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Breed', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightMin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0.0
    },
    heightMax: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0.0
    },
    weightMin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0.0
    },
    weightMax: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0.0
    },
    life_span: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'Not image',
    },
  },
  { timestamps: false }
  );
};