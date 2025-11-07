const express = require('express');
const app = express();

const { infoCursos } = require('./cursos');

// Routing

app.get('/', (req, res) => {
  res.send(`I feel like I'm learning 💻`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening. Go to http://localhost:${PORT}`);
});