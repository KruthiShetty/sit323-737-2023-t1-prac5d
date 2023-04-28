'use strict';

const express = require('express');

// constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
res.send('hello, world!');
});

// Simple time logger middleware
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleTimeString()} - Requested URL: ${req.originalUrl}`);
  next();
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
