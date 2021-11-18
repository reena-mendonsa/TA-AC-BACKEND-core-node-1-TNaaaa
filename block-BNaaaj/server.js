var url = require("url");

const parsedUrl = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`
  , true);



console.log(parsedUrl.query, "query");

console.log(parsedUrl.pathname, 'pathname');

console.log(parsedUrl.protocol, "protocol");