// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object
let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);

  res.end('welcome');
}

server.listen(5000, 'localhost', () => {
  console.log('server listening on port 5000');
});

// Q. create a node server
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);
  res.write('My first server in NodeJS');
  res.end();
}

server.listen(5100, 'localhost', () => {
  console.log('server listening on port 5100');
});

// Q. write code to create a node server

//     add listener on port 5555
//     console request headers
//     respond with content of user-agent from request headers.

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  res.write(req.headers['user-agent']);
  res.end();
}

server.listen(5555, 'localhost', () => {
  console.log('server listening on port 5555');
});

// Q. write code to create a node server
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);

  res.end(`${req.method},${req.url}`);
}

server.listen(5566, 'localhost', () => {
  console.log('server listening on port 5566');
});

// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);

  res.end(`${JSON.stringify(req.headers)}`);
}

server.listen(7000, 'localhost', () => {
  console.log('server listening on port 7000');
});

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  res.statusCode = 202;
  res.end('status code 202');
}

server.listen(3333, 'localhost', () => {
  console.log('server listening on port 3333');
});

// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h3>Welcome to altcampus</h3>`);
}

server.listen(8000, 'localhost', () => {
  console.log('server listening on port 8000');
});

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.writeHead(202, { 'Content-Type': 'text/html' });
  res.end(`<h3>Welcome to altcampus</h3>`);
}

server.listen(8000, 'localhost', () => {
  console.log('server listening on port 8000');
});

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ success: true, message: 'Welcome to Nodejs' }));
}

server.listen(8000, 'localhost', () => {
  console.log('server listening on port 8000');
});

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    console.log(req.method);
    res.end('Welcome');
  } else if (req.method === 'POST' && req.url === '/index') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h2>posted for first time</h2>`);
  }
}

server.listen(5050, 'localhost', () => {
  console.log('server listening on port 5050');
});

// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome');
  } else if (req.method === 'GET' && req.url === '/about') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h2>posted for first time</h2>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
}

server.listen(2345, 'localhost', () => {
  console.log('server listening on port 2345');
});

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/users') {
    console.log(req.method);
    fs.createReadStream('./form.html').pipe(res);
  } else if (req.method === 'POST' && req.url === '/users') {
    console.log(req.method);
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h2>posted for first time</h2>`);
  }
}

server.listen(5050, 'localhost', () => {
  console.log('server listening on port 5050');
});

// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

let http = require('http');
let url = require('url');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === `/users?email=nodeserver@gmail.com`) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;
    let str = parsedUrl.query;
    let index = str.indexOf('=');
    let updatedEmail = str.slice(index + 1);
    console.log(req.url, pathname, updatedEmail);
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"email":"${updatedEmail}"}`);
  }
}

server.listen(5050, 'localhost', () => {
  console.log('server listening on port 5050');
});