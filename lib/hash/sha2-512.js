'use strict';

function sha2_512(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha512');
  return hash.update(value).digest('hex');
}

module.exports = sha2_512;