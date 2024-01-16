'use strict';

function sha2_384(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('sha384');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = sha2_384;