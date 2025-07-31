require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

 
 
// Middleware y archivos estaticos
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Archivos estáticos (CSS, JS frontend)
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
app.use('/', clienteRoutes);         // Página de inicio y login
app.use('/citas', citaRoutes);       // Agendar cita, listar citas, etc.
app.use('/servicios', servicioRoutes); 
app.use('/usuarios', usuarioRoutes); // Registro/Login


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});