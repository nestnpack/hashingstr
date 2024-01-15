'use strict';

function sha3_512(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha3-512');
  return hash.update(value).digest('hex');
}

module.exports = sha3_512;