//8080
const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const port = 8080
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/', (req, res) => {
  res.send('Hello from the server!');
})


app.listen(port, () => {
  console.log(`Server listening at localhost:${8080}!`);
});