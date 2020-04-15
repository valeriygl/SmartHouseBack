const fs = require('fs');

const { storePath } = require('../../config');

const readFile = async () => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(storePath);

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

const writeFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile(storePath, data, err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
};

module.exports = { writeFile, readFile };
