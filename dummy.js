const express = require('express');
const app = express();
const port = 3000;

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello from the root route!');
});

// Define the /a route
app.get('/a', (req, res) => {
  res.send('Hello from the /a route!');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
