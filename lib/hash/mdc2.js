'use strict';

function mdc2(value) {
  const crypto = require('crypto');
  let hash = crypto.createHash('mdc2');
  hash = hash.update(value).digest('hex');
  return hash;
}

module.exports = mdc2;