const mongoose = require('mongoose');
const env = process.env.NODE_ENV ?? 'development';
const config = require('./../config/db')[env];

mongoose
  .connect(`mongodb://${config.HOST}:${config.PORT}/${config.DB_NAME}`)
  .then((data) => console.log('Connection success'))
  .catch((err) => console.log('Connection error', err));

// экспорт моделей
module.exports.User = require('./user');
module.exports.Post = require('./post');
