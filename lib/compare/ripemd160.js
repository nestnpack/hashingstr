'use strict';

function ripemd160(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('ripemd160');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = ripemd160;