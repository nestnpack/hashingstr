'use strict';

function md4(value, hashedValue) {
  const crypto = require('crypto');
  const hash = crypto.createHash('md4');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = md4;