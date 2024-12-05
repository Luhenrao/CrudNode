const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Carrega os modelos passando `sequelize`
const Administrador = require('.models/Administrador')(sequelize);
const Carrinho = require('.models/Carrinho')(sequelize);
const Cliente = require('.models/Cliente')(sequelize);
const Compra = require('.models/Compra')(sequelize);
const Estoque = require('.models/Estoque')(sequelize);
const Funcionario = require('.models/Funcionario')(sequelize);
const Produto = require('.models/Produto')(sequelize);
const Venda = require('.models/Venda')(sequelize);

// Relacionamentos
Funcionario.hasMany(Venda, {foreignKey: 'funcionarioId', as: 'vendas' });
Venda.belongsTo(Funcionario, {foreignKey: 'funcionarioId', as: 'funcionario' });

Venda.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'cliente' });
Cliente.hasOne(Venda, { foreignKey: 'clienteId', as: 'venda' });

Venda.hasMany(Produto, { foreignKey: 'vendaId', as: 'produtos' });
Produto.belongsTo(Venda, { foreignKey: 'vendaId', as: 'venda' });

Produto.belongsTo(Estoque, { foreignKey: 'estoqueId', as: 'estoque' });
Estoque.hasMany(Produto, { foreignKey: 'estoqueId', as: 'produtos' });

Produto.belongsTo(Compra, { foreignKey: 'compraId', as: 'compra' });
Compra.hasMany(Produto, { foreignKey: 'compraId', as: 'produtos' });

Produto.belongsTo(Carrinho, { foreignKey: 'carrinhoId', as: 'carrinho' });
Carrinho.hasMany(Produto, { foreignKey: 'carrinhoId', as: 'produtos' });

Compra.belongsTo(Administrador, { foreignKey: 'administradorId', as: 'administrador' });
Administrador.hasMany(Compra, { foreignKey: 'administradorId', as: 'compras' });

Carrinho.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'cliente' });
Cliente.hasOne(Carrinho, { foreignKey: 'clienteId', as: 'carrinho' });

// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize, Venda, Produto, Funcionario, Estoque, Compra, Cliente, Carrinho, Administrador };
