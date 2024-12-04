id
nome
cpf
endereco

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Cliente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
