const fs = require('fs');

const readFile = async path => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(path);

    let data = '';

    readStream.on('data', chunk => {
      data += chunk;
    });

    readStream.on('end', () => {
      resolve(data);
    });

    readStream.on('error', err => {
      reject(err);
    });
  });
};

module.exports = readFile;
