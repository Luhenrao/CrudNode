const express = require('express');
const { Estoque } = require('../models');

const router = express.Router();

// GET - Lista todos os itens do estoque
router.get('/', async (req, res) => {
  try {
    const itens = await Estoque.findAll();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Adiciona um item ao estoque
router.post('/', async (req, res) => {
  try {
    const item = await Estoque.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Atualiza um item do estoque por ID
router.put('/:id', async (req, res) => {
  try {
    const item = await Estoque.findByPk(req.params.id);
    if (item) {
      await item.update(req.body);
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Remove um item do estoque por ID
router.delete('/:id', async (req, res) => {
  try {
    const item = await Estoque.findByPk(req.params.id);
    if (item) {
      await item.destroy();
      res.json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
