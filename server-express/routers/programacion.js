const express = require('express');

// Creating router

const routerProgramacion = express.Router();
const { programacion } = require('../data/cursos').infoCursos;

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

// Exporting router

module.exports = routerProgramacion;