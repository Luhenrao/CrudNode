id
nome
preco
quantidade
Estoque
Compra
Venda
Carrinho

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Produto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
