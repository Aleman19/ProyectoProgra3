const db = require('../db/db');

exports.obtenerTodas = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT c.*, cl.nombre_cliente, s.nombre_servicio
              FROM citas c
              JOIN clientes cl ON c.id_cliente = cl.id_cliente
              JOIN servicios s ON c.id_servicio = s.id_servicio`,
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
  });
};

exports.crear = (datos) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO citas SET ?', datos, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
