id
cnpj
valor
Administrador
Produtos

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Compra', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
