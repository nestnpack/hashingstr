'use strict';

function whirlpool(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('whirlpool');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = whirlpool;