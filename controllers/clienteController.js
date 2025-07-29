const clienteDao = require('../dao/clienteDao');

exports.listarClientes = async (req, res) => {
  const clientes = await clienteDao.obtenerTodos();
  res.render('clientes', { clientes });
};

exports.crearCliente = async (req, res) => {
  await clienteDao.crear(req.body);
  res.redirect('/clientes');
};
