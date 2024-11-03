const express = require('express');
const router = express.Router();
const { Usuario } = require('../../sequelize');
const { manejarError } = require('../helpers');

// Registrar un nuevo usuario
router.post('/api/usuarios', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    manejarError(res, error, 'Error al registrar el usuario');
  }
});

// Obtener un usuario por ID
router.get('/api/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    manejarError(res, error, 'Error al obtener el usuario');
  }
});

module.exports = router;
