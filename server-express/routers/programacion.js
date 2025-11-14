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
    return res.status(404).end(); // termina la solicitud
                                  // y envía una respuesta vacía 
    // también podrías hacer:
    // return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    // Recuerda que eso sí envía una respuesta, y cargaría en el navegador
   }                               

  if (req.query.ordenar === "vistas") {
    return res.json(resultados.sort((a, b) => b.vistas - a.vistas ));
  }

  res.json(resultados); // usar .json en lugar de .send asegura que
});                     // es una altermativa para estar seguros de enviar json

routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body
  programacion.push(cursoNuevo);
  res.json(programacion);
});

routerProgramacion.put('/:id', (req, res) => {
  let cursoActualizado = req.body;
  const id = req.params.id;

  const index = programacion.findIndex(curso => curso.id == id);

  if (index >= 0) {
    programacion[index] = cursoActualizado;
    res.json(programacion);
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
  res.json(programacion);
});

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = programacion.findIndex(curso => curso.id == id);

  if (index >= 0) {
    programacion.splice(index, 1); 
  }
  res.json(programacion);
});

// Exporting router

module.exports = routerProgramacion;