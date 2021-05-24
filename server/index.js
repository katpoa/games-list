const express = require('express');
const axios = require('axios');

// const controller = require('./controllers/controller');
const { client_id, client_secret } = require('../config.js');


const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(cors());

// axios.post('https://id.twitch.tv/oauth2/token?client_id=0d2pau6mvwsnjgb0wntjitxiivs8wu&client_secret=bwao7bvbxef5c7pfpjm2hzyqfw96wu&grant_type=client_credentials')      

app.get('/api/', async (req, res) => {
  try {
      const response = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`);
      if (!response) { console.log('Error: couldnt get token' ); return res.sendStatus(500) }
      const response1 = await axios.post('https://api.igdb.com/v4/games/', 'fields *;', { headers: { 'Client-ID': client_id, 'Authorization': `Bearer ${response.data.access_token}` }});
      if (!response1) { console.log('Error: couldnt get data' ); return res.sendStatus(500)}
      const artwork = async () => {
          for (let i = 0; i < response1.data.length; i++) {
          const art = await axios.post('https://api.igdb.com/v4/covers/', `fields url; where id = ${response1.data[i].cover};`,  { headers: { 'Client-ID': client_id, 'Authorization': `Bearer ${response.data.access_token}` }});
          if (!art) { console.log('Error: couldnt get cover artwork'); return res.sendStatus(500)}
          console.log(art.data, 'link of cover image');
          response1.data[i].cover = art.data.url.slice(2);
          }
      }
      res.status(200).send(response1.data);
      } catch(e) {
      console.log(e);
      res.sendStatus(500);
      }
  });

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


Array.prototype._map = async function(cb) {
  try {
    const arr = this;
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      const newItem = await cb(arr[i]);
      results.push(newItem);
    }
    return results;
  } catch(e) {
    throw new Error(e);
  }
}