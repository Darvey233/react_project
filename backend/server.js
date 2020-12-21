const express = require('express');
const people = require('./people.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/users', (req, res) => {
  /// fetch people from database
  res.send(people);
});

app.get('/api/logout', (req, res) => {
  /// fetch people from database
  // res.send(people);
});

app.post('./api/login', (req, res) => {
  const { username, password } = req.body;

  res.send("You're logged in");
});

app.listen(8080, () => {
  console.log('server is running at 8080');
});
