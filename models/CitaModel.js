const router = require('express').Router();
const citaCtrl = require('../controllers/citaController');

router.get('/', (req, res) => res.render('index'));
router.get('/agendar', citaCtrl.list);
router.post('/agendar', citaCtrl.create);
router.get('/servicios', (req, res) => res.render('servicios'));
router.get('/contacto', (req, res) => res.render('contacto'));
router.get('/login', (req, res) => res.render('login'));

module.exports = router;
