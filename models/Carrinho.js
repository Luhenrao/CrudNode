id
Produto
Cliente

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Carrinho', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
};
