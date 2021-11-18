
let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.writeHead(201, { 'Content-type': 'text/html' });
  res.write('<h1>Welcome to Node js!!</h1>')
  res.end();
}

server.listen(4444, () => {
  console.log('Doing request from postman');
});