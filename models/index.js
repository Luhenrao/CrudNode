const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Carrega os modelos passando `sequelize`
const Administrador = require('./Administrador')(sequelize);
const Carrinho = require('./Carrinho')(sequelize);
const Cliente = require('./Cliente')(sequelize);
const Compra = require('./Compra')(sequelize);
const Estoque = require('./Estoque')(sequelize);
const Funcionario = require('./Funcionario')(sequelize);
const Produto = require('./Produto')(sequelize);
const Venda = require('./Venda')(sequelize);


// Relacionamento Funcionario 1 Venda N 
Funcionario.hasMany(Venda, {foreignKey: 'funcionarioId', as: 'vendas' });
Venda.belongsTo(Funcionario, {foreignKey: 'funcionarioId', as: 'funcionario' });

// Relacionamento Venda 1 Cliente 1
Venda.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'cliente' });
Cliente.hasOne(Venda, { foreignKey: 'clienteId', as: 'venda' });

// Relacionamento Venda 1 Produto N
Venda.hasMany(Produto, { foreignKey: 'vendaId', as: 'produtos' });
Produto.belongsTo(Venda, { foreignKey: 'vendaId', as: 'venda' });

// Relacionamento Produto N Estoque 1
Produto.belongsTo(Estoque, { foreignKey: 'estoqueId', as: 'estoque' });
Estoque.hasMany(Produto, { foreignKey: 'estoqueId', as: 'produtos' });

// Relacionamento Produto N Compra 1
Produto.belongsTo(Compra, { foreignKey: 'compraId', as: 'compra' });
Compra.hasMany(Produto, { foreignKey: 'compraId', as: 'produtos' });

// Relacionamento Produto N Carrinho 1
Produto.belongsTo(Carrinho, { foreignKey: 'carrinhoId', as: 'carrinho' });
Carrinho.hasMany(Produto, { foreignKey: 'carrinhoId', as: 'produtos' });

// Relacionamento Compra N Administrador 1
Compra.belongsTo(Administrador, { foreignKey: 'administradorId', as: 'administrador' });
Administrador.hasMany(Compra, { foreignKey: 'administradorId', as: 'compras' });

// Relacionamento Carrinho 1 Cliente 1
Carrinho.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'cliente' });
Cliente.hasOne(Carrinho, { foreignKey: 'clienteId', as: 'carrinho' });


// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize, Venda, Produto, Funcionario, Estoque, Compra, Cliente, Carrinho, Administrador };