const express = require('express');
const cors = require('cors');
const { sequelize } = require('../sequelize'); // Importa la instancia de Sequelize

const app = express();
app.use(cors());
app.use(express.json()); // Para parsear JSON en las solicitudes

// Importar y usar las rutas
const usuarioRoutes = require('./routes/usuarios');
const habitoRoutes = require('./routes/habitos');
const progresoRoutes = require('./routes/progresos');

app.use('/usuarios', usuarioRoutes);
app.use('/habitos', habitoRoutes);
app.use('/progresos', progresoRoutes);

// Exporta la instancia de `app`
module.exports = app;
