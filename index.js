const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

mongoose.connect('mongodb+srv://rabin900:souls900@mycluster.emabxgd.mongodb.net/Shops').then((result) => {
  app.listen(port);
}).catch((err) => {
  console.log(err);
})
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
  return res.status(200).json({ status: 'This is shop Backened' });
});

app.use(userRoutes);








