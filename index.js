const express = require('express');
const morgan = require('morgan');
const app = express();

app.listen(5000);




app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.sendFile('./home_page.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./About.html', { root: __dirname });
});



app.use((req, res) => {
  res.send('nothing found');
});







