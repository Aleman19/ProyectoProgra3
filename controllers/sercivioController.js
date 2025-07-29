const servicioDao = require('../dao/servicioDao');

exports.listarServicios = async (req, res) => {
  const servicios = await servicioDao.obtenerTodos();
  res.render('servicios', { servicios });
};

exports.crearServicio = async (req, res) => {
  await servicioDao.crear(req.body);
  res.redirect('/servicios');
};