'use strict';

function sha2_256(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha256');
  return hash.update(value).digest('hex');
}

module.exports = sha2_256;