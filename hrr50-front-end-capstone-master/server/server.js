const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const { retrieveOneProperty } = require('../database/index.js');

const port = 3000;
const app = express();

app.use(cors());
app.use(compression());
app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(cors({ origin: 'http://localhost:8000' }));
app.use('/bundle', express.static(path.join(__dirname, '..', 'public/app.js')));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/photos', (req, res) => {
  retrieveOneProperty(1, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${3000}!`);
});

module.exports = app;
