const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    }
  },{
    tableName: 'Types', // Nombre de la tabla en la base de datos
    timestamps: false
  });
};