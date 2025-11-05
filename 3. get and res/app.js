const http = require('http');

const server = http.createServer((req, res) => {
  
  // request object ---------------------------

  console.log("====> req (solicitud)");
  console.log(req.url);
  console.log(req.method);
  res.end("This is a server lmao");
  

  // response object -------------------------- 

  console.log("====> res (respuesta)");
  console.log(res.statusCode);

  res.statusCode = 201;
  console.log(res.statusCode);

  res.setHeader('Content-Type', 'application/json');
  console.log(res.getHeaders());


  res.end('This is the end. There is no return');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}...`);
});
