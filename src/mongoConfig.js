const mongoose = require('mongoose');

const dbURL =
  'mongodb+srv://root:123@cluster0-tjkuc.mongodb.net/abra?retryWrites=true&w=majority';

const localURL = 'mongodb://mongo:27017/docker-node';

module.exports = function () {
  mongoose.connect(localURL);

  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection is open to ', localURL);
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
