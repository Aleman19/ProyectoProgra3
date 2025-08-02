const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
require('dotenv').config();
const db = require('./database/db');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// Rutas
app.use('/', require('./routes/indexRoutes'));
app.use('/citas', require('./routes/citaRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
