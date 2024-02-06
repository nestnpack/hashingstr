'use strict';

function mdc2(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('mdc2');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = mdc2;