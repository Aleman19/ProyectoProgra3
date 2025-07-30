const express = require('express');
const router = express.Router();

// Página principal
router.get('/', (req, res) => {
  res.render('index');
});

// Página de contacto
router.get('/contacto', (req, res) => {
  res.render('contacto');
});

module.exports = router;