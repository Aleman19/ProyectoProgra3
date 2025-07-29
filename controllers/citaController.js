const citaDao = require('../dao/citaDao');

exports.listarCitas = async (req, res) => {
  const citas = await citaDao.obtenerTodas();
  res.render('citas', { citas });
};

exports.crearCita = async (req, res) => {
  await citaDao.crear(req.body);
  res.redirect('/citas');
};