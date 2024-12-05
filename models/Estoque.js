
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Estoque', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });
};
