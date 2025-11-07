const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hi my friends');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening from http://localhost:${PORT}`);
});