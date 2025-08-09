const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',     // O el host de tu servidor MySQL
  user: 'root',          // Usuario de MySQL
  password: 'testPW', // Contraseña
  database: 'barberia'  // Nombre de la base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión:', err.code, err.message);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
  connection.end();
});