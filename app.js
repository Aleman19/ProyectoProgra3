require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const db = require('./db'); // Asegurate de que el path es correcto


// Middleware y archivos estaticos
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
 
// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 
// Importar rutas
const clienteRoutes = require('./routes/clienteRoutes');
const citaRoutes = require('./routes/citaRoutes');
const servicioRoutes = require('./routes/servicioRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

// llamar rutas
app.use('/', clienteRoutes);         
app.use('/citas', citaRoutes);       
app.use('/servicios', servicioRoutes); 
app.use('/usuarios', usuarioRoutes); 


app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1');
    res.send('✅ Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    res.status(500).send('❌ Error al conectar con la base de datos');
  }
});
//test
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});