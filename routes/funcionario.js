const express = require('express');
const { Funcionario } = require('../models');

const router = express.Router();

// GET - Lista todos os funcionários
router.get('/', async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Cria um funcionário
router.post('/', async (req, res) => {
  try {
    const funcionario = await Funcionario.create(req.body);
    res.status(201).json(funcionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Atualiza um funcionário por ID
router.put('/:id', async (req, res) => {
  try {
    const funcionario = await Funcionario.findByPk(req.params.id);
    if (funcionario) {
      await funcionario.update(req.body);
      res.json(funcionario);
    } else {
      res.status(404).json({ error: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Remove um funcionário por ID
router.delete('/:id', async (req, res) => {
  try {
    const funcionario = await Funcionario.findByPk(req.params.id);
    if (funcionario) {
      await funcionario.destroy();
      res.json({ message: 'Funcionario deleted' });
    } else {
      res.status(404).json({ error: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
