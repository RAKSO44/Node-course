const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received for:', req.url);
  res.end('My first server');
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});