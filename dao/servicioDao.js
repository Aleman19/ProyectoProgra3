const db = require('../database/db');

exports.obtenerTodos = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM servicios', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

exports.crear = (datos) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO servicios SET ?', datos, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
