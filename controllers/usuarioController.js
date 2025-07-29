const usuarioDao = require('../dao/usuarioDao');

exports.iniciarSesion = async (req, res) => {
  const { nombre_user, contraseña_user } = req.body;
  const usuario = await usuarioDao.autenticar(nombre_user, contraseña_user);
  if (usuario) {
    res.send(`Bienvenido ${usuario.nombre_user} - Rol: ${usuario.rol_user}`);
  } else {
    res.send('Credenciales inválidas');
  }
};