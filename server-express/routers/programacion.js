const express = require('express');

// Creating router

const routerProgramacion = express.Router();
const { programacion } = require('../data/cursos').infoCursos;

// Middleware
routerProgramacion.use(express.json());

// API

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  if (req.query.ordenar === "vistas") {
    return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas )));
  }

  res.send(JSON.stringify(resultados));
});

routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

routerProgramacion.put('/:id', (req, res) => {
  let cursoActualizado = req.body;
  const id = req.params.id;

  const index = programacion.findIndex(curso => curso.id == id);

  if (index >= 0) {
    programacion[index] = cursoActualizado;
    res.send(JSON.stringify(programacion));
  }
});

// Exporting router

module.exports = routerProgramacion;