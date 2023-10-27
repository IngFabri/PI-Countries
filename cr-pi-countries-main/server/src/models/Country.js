const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      primaryKey:true,
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    commonName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    officialName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion:{
      type: DataTypes.STRING
    },
    area:{
      type: DataTypes.DECIMAL,
    },
    population:{
      type: DataTypes.INTEGER
    }
  },{
    timestamps: false
});
};