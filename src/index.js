const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose
  .connect('mongodb://127.0.0.1:27017/testpd2021')
  .then((data) => console.log('Connection success'))
  .catch((err) => console.log('Connection error', err));
