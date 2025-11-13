const express = require('express');

// Creating router

const routerProgramacion = express.Router();
const { programacion } = require('../data/cursos').infoCursos;

// Middleware
routerProgramacion.use(express.json());

// API

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion)); // .send convierte automaticamente a JSON,
});                                       // Es decir, JSON.stringify no es necesario

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  if (req.query.ordenar === "vistas") {
    return res.send(resultados.sort((a, b) => b.vistas - a.vistas ));
  }

  res.send(JSON.stringify(resultados));
});

routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body
  programacion.push(cursoNuevo);
  res.send(programacion);
});

routerProgramacion.put('/:id', (req, res) => {
  let cursoActualizado = req.body;
  const id = req.params.id;

  const index = programacion.findIndex(curso => curso.id == id);

  if (index >= 0) {
    programacion[index] = cursoActualizado;
    res.send(programacion);
  }
});

routerProgramacion.patch('/:id', (req, res) => {
  let infoActualizada = req.body;
  const id = req.params.id;

  const index = programacion.findIndex(curso => curso.id == id);

  if (index >= 0) {
    const cursoAModificar = programacion[index];
    Object.assign(cursoAModificar, infoActualizada);
  }
  res.send(programacion);
});

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = programacion.findIndex(curso => curso.id == id);

  if (index >= 0) {
    programacion.splice(index, 1); 
  }
  res.send(programacion);
});

// Exporting router

module.exports = routerProgramacion;