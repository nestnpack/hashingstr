'use strict';

function sm3(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('sm3');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = sm3;