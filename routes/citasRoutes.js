const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.get('/', citaController.listarCitas);
router.post('/crear', citaController.crearCita);

module.exports = router;
