'use strict';

function md5(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('md5');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = md5;