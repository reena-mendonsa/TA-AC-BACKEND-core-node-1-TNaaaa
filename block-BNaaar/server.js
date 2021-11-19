let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.end('Welcome to homepage');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h2>This is all about NodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
     res.writeHead(200, { 'Content-Type': 'text/json' });
     res.end('message: this is a post request');
  } 

}

server.listen(5000, () => {
  console.log("listening on port 5000");

});
