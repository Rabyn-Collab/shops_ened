const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const fileUpload = require('express-fileupload');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://rabin900:souls900@mycluster.emabxgd.mongodb.net/Shops').then((result) => {
  app.listen(port);
}).catch((err) => {
  console.log(err);
})
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  abortOnLimit: true,
  createParentPath: true
}));

app.get('/', (req, res) => {
  return res.status(200).json({ status: 'This is shop Backened' });
});

app.use(userRoutes);
app.use(productRoutes);








