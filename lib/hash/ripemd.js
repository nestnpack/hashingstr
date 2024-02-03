'use strict';

function ripemd(value) {
  const crypto = require('crypto');
  let hash = crypto.createHash('ripemd');
  hash = hash.update(value).digest('hex');
  return hash;
}

module.exports = ripemd;