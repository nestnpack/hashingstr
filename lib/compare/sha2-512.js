'use strict';

function sha2_512(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('sha512');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = sha2_512;