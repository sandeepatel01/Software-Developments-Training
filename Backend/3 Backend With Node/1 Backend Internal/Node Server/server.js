const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Hello, World!');

  console.log("Incoming request");
  switch (req.method) {
    case 'GET':
      {
        if (req.url === '/') return res.end('Home Page');
        if (req.url === '/about') return res.end('About Page');
        if (req.url === '/contact') return res.end('Contact Page');
      }
      break;

    case 'POST':
      { }
      break;

  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
