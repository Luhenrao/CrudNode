const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

// Importação de rotas
const adminRoutes = require('./routes/administrador');
const carrinhoRoutes = require('./routes/carrinho');
const clienteRoutes = require('./routes/cliente');
const compraRoutes = require('./routes/compra');
const estoqueRoutes = require('./routes/estoque');
const funcionarioRoutes = require('./routes/funcionario');
const produtoRoutes = require('./routes/produto');
const vendaRoutes = require('./routes/venda');

const app = express();
app.use(bodyParser.json());

// Registro de rotas
app.use('/administrador', adminRoutes);
app.use('/carrinho', carrinhoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/compra', compraRoutes);
app.use('/estoque', estoqueRoutes);
app.use('/funcionario', funcionarioRoutes);
app.use('/produto', produtoRoutes);
app.use('/venda', vendaRoutes);

// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
