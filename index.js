const http = require('http');

// console.log(http);
http.createServer(function (req, res) {
  // console.log(req);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello this is for you !');
}).listen(8080);