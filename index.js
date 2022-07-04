const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello World');
});


app.get('/version', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('1.0.0');
});

module.exports = app.listen(8080, () => {
});
