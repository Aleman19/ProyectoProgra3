const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

 
// Agendar cita (formulario)
router.get('/agendar', citaController.mostrarFormularioAgendar);
 
module.exports = router;

