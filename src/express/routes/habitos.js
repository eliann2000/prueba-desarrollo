const express = require('express');
const router = express.Router();
const { Habito } = require('../../sequelize');
const { manejarError } = require('../helpers');

// Obtener todos los hábitos del usuario autenticado
router.get('/api/habitos', async (req, res) => {
  try {
    // Reemplazar con la lógica de autenticación para obtener el usuario autenticado
    const usuarioId = req.user.id; 
    const habitos = await Habito.findAll({ where: { usuarioId } });
    res.json(habitos);
  } catch (error) {
    manejarError(res, error, 'Error al obtener los hábitos');
  }
});

// Crear un nuevo hábito para el usuario autenticado
router.post('/api/habitos', async (req, res) => {
  try {
    const usuarioId = req.user.id; // Reemplazar con la lógica de autenticación
    const nuevoHabito = await Habito.create({ ...req.body, usuarioId });
    res.status(201).json(nuevoHabito);
  } catch (error) {
    manejarError(res, error, 'Error al crear el hábito');
  }
});

// Actualizar un hábito específico
router.put('/api/habitos/:id', async (req, res) => {
  try {
    const habito = await Habito.findByPk(req.params.id);
    if (habito) {
      await habito.update(req.body);
      res.json(habito);
    } else {
      res.status(404).json({ error: 'Hábito no encontrado' });
    }
  } catch (error) {
    manejarError(res, error, 'Error al actualizar el hábito');
  }
});

// Eliminar un hábito específico
router.delete('/api/habitos/:id', async (req, res) => {
  try {
    const habito = await Habito.findByPk(req.params.id);
    if (habito) {
      await habito.destroy();
      res.status(204).end(); // Respuesta sin contenido
    } else {
      res.status(404).json({ error: 'Hábito no encontrado' });
    }
  } catch (error) {
    manejarError(res, error, 'Error al eliminar el hábito');
  }
});

module.exports = router;
