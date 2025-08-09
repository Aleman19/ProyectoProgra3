const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Mostrar página de login (GET)
router.get('/login', (req, res) => {
  res.render('login'); // Asegúrate que login.ejs exista en views/
});

// Procesar login (POST)
router.post('/login', usuarioController.iniciarSesion);

module.exports = router;