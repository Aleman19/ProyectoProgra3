const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const citasRoutes = require('./routes/citas');
app.use('/', citasRoutes);

// Configuración del socket
io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

// Iniciar el servidor
http.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor en http://localhost:${process.env.PORT || 3000}`);
});
