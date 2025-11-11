const express = require('express');
const app = express();
// nodemon app.js

const { infoCursos } = require('./cursos');

//Routers -----------------------------------------------

const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);

// Routing ----------------------------------------------
app.get('/', (req, res) => {
  res.send(`I feel like I'm learning 💻`);
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

// Programacion

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas )));
  }

  res.send(JSON.stringify(resultados));
});

// Matematicas

routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron temas de ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});
  
routerMatematicas.get('/:tema/:nivel', (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;
  const resultados = infoCursos.matematicas.filter(curso => 
    curso.tema === tema && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron temas de ${tema} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});


//-----------------------------------------------------------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening. Go to http://localhost:${PORT}`);
});