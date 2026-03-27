const http = require('node:http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
if(req.url === '/ping'){
	res.statusCode = 200;
	res.end('pong\n');
	return;
}
if(req.url === '/system-info'){
        res.statusCode = 200;
        res.end('Hi\n');
	return;
}

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
