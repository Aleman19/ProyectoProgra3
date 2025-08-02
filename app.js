console.log("📦 Iniciando servidor...");
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io')(server);
const citasRoutes = require('./routes/citasRoutes');
require('dotenv').config();
const db = require('./db/db');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use('/', require('./routes/indexRoutes'));
app.use('/citas/agendar', require('./routes/citasRoutes'));

// Socket.IO (Chat en vivo)
socketIO.on('connection', socket => {
  console.log('🟢 Usuario conectado al chat');
  socket.on('mensajeCliente', msg => {
    console.log("💬 Cliente:", msg);
    socketIO.emit('mensajeServidor', msg);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
