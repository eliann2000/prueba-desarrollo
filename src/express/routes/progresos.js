const express = require('express');
const router = express.Router();
const { Progreso } = require('../../sequelize');
const { manejarError } = require('../helpers');

// Obtener progreso de un hábito específico
router.get('/api/habitos/:id/progreso', async (req, res) => {
  try {
    const progresos = await Progreso.findAll({ where: { habitoId: req.params.id } });
    res.json(progresos);
  } catch (error) {
    manejarError(res, error, 'Error al obtener el progreso');
  }
});

// Registrar progreso para un hábito específico
router.post('/api/habitos/:id/progreso', async (req, res) => {
  try {
    const nuevoProgreso = await Progreso.create({ ...req.body, habitoId: req.params.id });
    res.status(201).json(nuevoProgreso);
  } catch (error) {
    manejarError(res, error, 'Error al registrar el progreso');
  }
});

module.exports = router;
