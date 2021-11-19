var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require('path');
let ind = path.join(__dirname, '../', '../', 'index.html');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('../../index.html').pipe(res);
  };
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('../../about.html').pipe(res);
  };
   if (req.url.split('.').pop() === 'css') {
     res.setHeader('Content-Type', 'text/css');
     fs.createReadStream('../stylesheet/style.css').pipe(res);
  };
  if (req.url.split('.').pop() === 'jpg') {
    res.setHeader('Content-Type', 'text/image');
    fs.createReadStream('../images/img1.jpg').pipe(res);
  }
}

server.listen(3002, () => {
  console.log('Server is listening at 3002');
});