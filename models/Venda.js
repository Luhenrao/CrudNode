const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Venda', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, // Define como chave primária
            autoIncrement: true, // Define auto incremento para IDs únicos
        },
        valor: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                min: 0, // Garante que o valor seja positivo
            },
        },
        desconto: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            validate: {
                min: 0, // Garante que o desconto não seja negativo
            },
        },
    });
};
