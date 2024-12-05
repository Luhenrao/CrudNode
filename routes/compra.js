const express = require('express');
const { Compra } = require('../models');

const router = express.Router();

// GET - Lista todas as compras
router.get('/', async (req, res) => {
  try {
    const compras = await Compra.findAll();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Cria uma compra
router.post('/', async (req, res) => {
  try {
    const compra = await Compra.create(req.body);
    res.status(201).json(compra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Atualiza uma compra por ID
router.put('/:id', async (req, res) => {
  try {
    const compra = await Compra.findByPk(req.params.id);
    if (compra) {
      await compra.update(req.body);
      res.json(compra);
    } else {
      res.status(404).json({ error: 'Compra not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Remove uma compra por ID
router.delete('/:id', async (req, res) => {
  try {
    const compra = await Compra.findByPk(req.params.id);
    if (compra) {
      await compra.destroy();
      res.json({ message: 'Compra deleted' });
    } else {
      res.status(404).json({ error: 'Compra not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
