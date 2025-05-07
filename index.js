const http = require('http');

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && req.url === '/api/users') {
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } else if (req.method === 'GET' && req.url.match(/^\/api\/users\/\d+$/)) {
    const id = parseInt(req.url.split('/')[3]);
    const user = users.find(u => u.id === id);
    if (user) {
      res.statusCode = 200;
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'User not found' }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
