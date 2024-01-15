'use strict';

function shake256(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('shake256');
  return hash.update(value).digest('hex');
}

module.exports = shake256;