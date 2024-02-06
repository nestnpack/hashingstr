'use strict';

function ripemd(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('ripemd');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = ripemd;