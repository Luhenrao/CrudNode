nome
email
Compra

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Administrador', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validação para garantir que o valor seja um email válido
      }
    },
  });
};
