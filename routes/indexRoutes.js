const express = require('express');
const router = express.Router();

// Ruta principal - Página de inicio
router.get('/', (req, res) => {
  res.render('index', { titulo: 'Bienvenido a BarberApp' });
});

module.exports = router;
