'use strict';

function sha3_512(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('sha3-512');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = sha3_512;