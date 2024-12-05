const express = require('express');
const { Venda } = require('../models');

const router = express.Router();

// GET - Lista todas as vendas
router.get('/', async (req, res) => {
  try {
    const vendas = await Venda.findAll();
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Cria uma venda
router.post('/', async (req, res) => {
  try {
    const venda = await Venda.create(req.body);
    res.status(201).json(venda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Atualiza uma venda por ID
router.put('/:id', async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id);
    if (venda) {
      await venda.update(req.body);
      res.json(venda);
    } else {
      res.status(404).json({ error: 'Venda not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Remove uma venda por ID
router.delete('/:id', async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id);
    if (venda) {
      await venda.destroy();
      res.json({ message: 'Venda deleted' });
    } else {
      res.status(404).json({ error: 'Venda not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
