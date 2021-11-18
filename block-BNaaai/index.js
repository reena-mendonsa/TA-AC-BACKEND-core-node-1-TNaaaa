var url = require('url');
const parsedUrl = url.parse(
  'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male',
  true
);
console.log(parsedUrl);

console.log(parsedUrl.pathname, "pathname");

console.log(parsedUrl.query, "query");

console.log(parsedUrl.host, "hello");

console.log(parsedUrl.protocol, "protocol");

// Do a request on google.com and view headers inside developer's network tab by clicking on a specific request.

const parsedGoogleUrl = url.parse("https://www.google.com/", true);
console.log(parsedGoogleUrl);