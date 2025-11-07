const http = require('http');
const { infoCursos } = require('./cursos');

const server = http.createServer((req, res) => {

  const { method } = req;

  switch (method) {
    case 'GET':
      return handleGETRequest(req, res);
    case 'POST':
      return handlePOSTRequest(req, res);
    default:
      res.statusCode = 501;
      res.end(`El servidor no puede manejar la solicitud: ${method}`);
  }
});

function handleGETRequest(req, res) {

  const path = req.url;
  console.log(res.statusCode) // 200 OK (por defecto)

  if (path === '/') {
    // res.statusCode = 200;
    return res.end(`I don't have a job yet, but this is another step to Australia`);

  } else if (path === '/api/cursos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(infoCursos));

  } else if (path === '/api/cursos/programacion') {
    return res.end(JSON.stringify(infoCursos.programacion));
  }

  res.statusCode = 404;
  return res.end('El recurso solicitado no existe');
}

function handlePOSTRequest(req, res) {

  const path = req.url;
  console.log(res.statusCode)

  if (path === '/api/cursos/programacion') {
    return res.end('El servidor recibió una solicitud POST para /cursos/programacion');
  }

  res.statusCode = 404;
  return res.end('Error xd');
}

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`El servidor está escuchando en: http://localhost:${PORT}`);
});