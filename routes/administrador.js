const express = require('express');
const { Administrador } = require('../models');

const router = express.Router();

// GET - Lista todos os administradores
router.get('/', async (req, res) => {
  try {
    const administradores = await Administrador.findAll();
    res.json(administradores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Cria um administrador
router.post('/', async (req, res) => {
  try {
    const administrador = await Administrador.create(req.body);
    res.status(201).json(administrador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Atualiza um administrador por ID
router.put('/:id', async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (administrador) {
      await administrador.update(req.body);
      res.json(administrador);
    } else {
      res.status(404).json({ error: 'Administrador not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Remove um administrador por ID
router.delete('/:id', async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (administrador) {
      await administrador.destroy();
      res.json({ message: 'Administrador deleted' });
    } else {
      res.status(404).json({ error: 'Administrador not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
