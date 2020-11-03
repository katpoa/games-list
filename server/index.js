const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use('/', bodyParser.json());

// app.get('/api/', (req, res) => {
//  db.query('SELECT * FROM', )/model.Model.find({}).exec(
// (err, data) => {
//  if (err) {
//        res.status(400).send(err);
//      } else {
//        console.log(data);
//        res.status(200).send(data);
//      }
//    });
//  });

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
