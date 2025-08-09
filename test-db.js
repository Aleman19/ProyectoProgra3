const mysql = require('mysql2');

// Configura los datos de conexión igual que en tu proyecto
const connection = mysql.createConnection({
  host: 'localhost',     // Cambia si tu servidor no está local
  user: 'root',          // Usuario de MySQL
  password: 'testPW',          // Contraseña de MySQL
  database: 'barberia' // Cambia por el nombre de tu BD
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión: ', err.message);
    return;
  }
  console.log('✅ Conexión exitosa a MySQL');

  // Prueba una consulta simple
  connection.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) throw err;
    console.log('Resultado de prueba:', results[0].resultado);
    connection.end();
  });
});
