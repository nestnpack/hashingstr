'use strict';

function sha3_224(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha3-224');
  return hash.update(value).digest('hex');
}

module.exports = sha3_224;