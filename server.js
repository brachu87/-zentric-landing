const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname, { extensions: ['html'] }));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// fallback: cualquier ruta desconocida -> home de la landing
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Landing Gestumio en puerto ' + PORT));
