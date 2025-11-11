// 'nodemon app.js' to execute

const express = require('express');
const app = express();

const { infoCursos } = require('./data/cursos');

// Importing routers -----------------------------------------

const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas');
app.use('/api/cursos/matematicas', routerMatematicas);

// Routing ---------------------------------------------------

app.get('/', (req, res) => {
  res.send(`I feel like I'm learning 💻`);
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

//------------------------------------------------------------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening. Go to http://localhost:${PORT}`);
});