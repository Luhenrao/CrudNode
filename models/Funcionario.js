id
nome
cpf
Vendas

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Funcionario', {
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
  });
};
