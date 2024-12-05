const express = require('express');
const { Cliente } = require('../models');

const router = express.Router();

// GET - Lista todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Cria um cliente
router.post('/', async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Atualiza um cliente por ID
router.put('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.update(req.body);
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Remove um cliente por ID
router.delete('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.destroy();
      res.json({ message: 'Cliente deleted' });
    } else {
      res.status(404).json({ error: 'Cliente not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
