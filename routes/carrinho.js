const express = require('express');
const { Carrinho } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const carrinhos = await Carrinho.findAll();
    res.json(carrinhos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const carrinho = await Carrinho.create(req.body);
    res.status(201).json(carrinho);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const carrinho = await Carrinho.findByPk(req.params.id);
    if (carrinho) {
      await carrinho.update(req.body);
      res.json(carrinho);
    } else {
      res.status(404).json({ error: 'Carrinho not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const carrinho = await Carrinho.findByPk(req.params.id);
    if (carrinho) {
      await carrinho.destroy();
      res.json({ message: 'Carrinho deleted' });
    } else {
      res.status(404).json({ error: 'Carrinho not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
