const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

router.get('/', servicioController.listarServicios);
router.post('/crear', servicioController.crearServicio);

module.exports = router;