const express = require('express');
const path = require('path');
const { retrieveOneProperty } = require('../database/index.js');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/bundle', express.static(`${__dirname}/../client/public/index.js`));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/photos', (req, res) => {
  retrieveOneProperty(1, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${8080}!`);
});

module.exports = app;
