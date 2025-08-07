const mysql = require('mysql2/promise'); // Usa solo esta línea

const db = mysql.createPool({
  host: 'localhost',           // O 127.0.0.1
  user: 'root',                // O el usuario que hayas creado
  password: 'testPW',   // Escribí la contraseña directamente aquí
  database: 'barberia', // Nombre de tu base de datos
  port: 3306                   // Puerto por defecto de MySQL
});

module.exports = db;