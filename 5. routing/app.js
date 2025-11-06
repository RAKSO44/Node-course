const http = require('http');
const cursos = require('./cursos');

const server = http.createServer((req, res) => {

  const { method } = req;

  switch(method) {
    case 'GET':
      return handleGETRequest(req, res);
    default:
      console.log(`El servidor no puede manejar la solicitud: ${method}`);
  }
});

function handleGETRequest(req, res) {
  const path = req.url;

  if (path === '/'){

    res.statusCode = 200;
    res.end(`I don't have a job yet, but this is another step to Australia`);
    
  } else if (path === '/cursos') {

    res.statusCode = 200;
    res.end(JSON.stringify(cursos.infoCursos));
  }
}


const PORT = 3000;

server.listen(PORT, () => {
  console.log(`El servidor está escuchando en: http://localhost:${PORT}`);
});