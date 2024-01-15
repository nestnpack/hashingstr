'use strict';

function shake128(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('shake128');
  return hash.update(value).digest('hex');
}

module.exports = shake128;