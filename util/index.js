const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');

const OUTPUT_DIRECTORY = 'output';
const OUTPUT_PATH = resolve(__dirname, '..', OUTPUT_DIRECTORY);

const writeFilePromise = promisify(fs.writeFile);

/**
 * @param {string} filename
 * @param {string} data
 */
const writeFile = async (filename, data) => {
  await writeFilePromise(resolve(OUTPUT_PATH, filename), data);
};

/**
 * @param {string} filename
 * @param {string} data
 */
const writeJson = async (filename, data) => {
  await writeFile(filename, JSON.stringify(data, null, 2));
};

module.exports = {
  writeFile,
  writeJson,
};
