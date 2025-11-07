const express = require('express');
const app = express();

const { infoCursos } = require('./cursos');

// Routing ----------------------------------------------
app.get('/', (req, res) => {
  res.send(`I feel like I'm learning 💻`);
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/matematicas', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening. Go to http://localhost:${PORT}`);
});