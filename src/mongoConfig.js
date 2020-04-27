const mongoose = require('mongoose');

const localhoustUrl = 'mongodb://mongo:27017/docker-node';

const url = process.env.mongoDbUrl || localhoustUrl;

module.exports = function () {
  mongoose.connect(url);

  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection is open to ', url);
  });

  mongoose.connection.on('error', function (err) {
    console.log(`Mongoose default connection has occured ${err} error`);
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection is disconnected');
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log(
        'Mongoose default connection is disconnected due to application termination'
      );
      process.exit(0);
    });
  });
};
