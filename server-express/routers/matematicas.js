const express = require('express');

// Creating router

const routerMatematicas = express.Router();
const { matematicas } = require('../data/cursos').infoCursos;

// API

routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter(curso => curso.tema === tema);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron temas de ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});
  
routerMatematicas.get('/:tema/:nivel', (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;
  const resultados = matematicas.filter(curso => 
    curso.tema === tema && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron temas de ${tema} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

// Exporting router

module.exports = routerMatematicas;