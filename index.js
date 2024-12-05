const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Administrador, Carrinho, Cliente, Compra, Estoque, Funcionario, Produto, Venda } = require('./models'); // importa os modelos corretamente
const Estoque = require('./models/Estoque');

const app = express();
app.use(bodyParser.json());

// POST
app.post('/administrador', async (req, res) => {
  try {
    const administrador = await Administrador.create(req.body);
    res.status(201).json(administrador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post('/carrinho', async (req, res) => {
  try {
    const carrinho = await Carrinho.create(req.body);
    res.status(201).json(carrinho);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post('/cliente', async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post('/compra', async (req, res) => {
  try {
    const compra = await Compra.create(req.body);
    res.status(201).json(compra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post('/estoque', async (req, res) => {
  try {
    const estoque = await Estoque.create(req.body);
    res.status(201).json(estoque);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post('/funcionario', async (req, res) => {
  try {
    const funcionario = await Funcionario.create(req.body);
    res.status(201).json(funcionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post('/produto', async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post('/venda', async (req, res) => {
  try {
    const venda = await Venda.create(req.body);
    res.status(201).json(venda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
/////////////////////////////////////////////////
// Rota para criar endereço associado ao usuário
/*app.post('/users/:userId/address', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      const address = await Address.create({ ...req.body, userId: user.id });
      res.status(201).json(address);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
*/

// GET
app.get('/administradores', async (req, res) => {
    try {
      const administradores = await Administrador.findAll();
      res.json(administradores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

app.get('/carrinhos', async (req, res) => {
  try {
    const carrinhos = await Carrinho.findAll();
    res.json(carrinhos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/compras', async (req, res) => {
  try {
    const compras = await Compra.findAll();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/estoques', async (req, res) => {
  try {
    const estoques = await Estoque.findAll();
    res.json(estoques);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/funcionarios', async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/vendas', async (req, res) => {
  try {
    const vendas = await Venda.findAll();
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
app.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  */
 // PUT
app.put('/administrador/:id', async (req, res) => {
    try {
      const administrador = await administrador.findByPk(req.params.id);
      if (administrador) {
        await administrador.update(req.body);
        res.json(administrador);
      } else {
        res.status(404).json({ error: 'Not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

app.put('/carrinho/:id', async (req, res) => {
  try {
    const carrinho = await Carrinho.findByPk(req.params.id);
    if (carrinho) {
      await carrinho.update(req.body);
      res.json(carrinho);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/cliente/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.update(req.body);
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/compra/:id', async (req, res) => {
  try {
    const compra = await Compra.findByPk(req.params.id);
    if (compra) {
      await compra.update(req.body);
      res.json(compra);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/estoque/:id', async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (estoque) {
      await estoque.update(req.body);
      res.json(estoque);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/funcionario/:id', async (req, res) => {
  try {
    const funcionario = await Funcionario.findByPk(req.params.id);
    if (funcionario) {
      await funcionario.update(req.body);
      res.json(funcionario);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/produto/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.update(req.body);
      res.json(produto);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/venda/:id', async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id);
    if (venda) {
      await venda.update(req.body);
      res.json(venda);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
  
// DELETE
app.delete('/users/:id', async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});







// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
