'use strict';

function sha2_224(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('sha224');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = sha2_224;