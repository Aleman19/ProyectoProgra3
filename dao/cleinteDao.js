const db = require('../db/db');

exports.obtenerTodos = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM clientes', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

exports.crear = (datos) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO clientes SET ?', datos, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
