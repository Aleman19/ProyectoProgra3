const db = require('../db/db');

exports.autenticar = (usuario, contrasena) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM usuarios WHERE nombre_user = ? AND contraseña_user = ?',
      [usuario, contrasena], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      });
  });
};
