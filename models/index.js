const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Carrega os modelos passando `sequelize`
const User = require('./User')(sequelize);
const Address = require('./Address')(sequelize);

// Define a relação de um-para-um entre User e Address
User.hasOne(Address, {
  foreignKey: 'userId',
  as: 'address',
});
Address.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize, User, Address };