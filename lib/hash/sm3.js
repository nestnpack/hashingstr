'use strict';

function sm3(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sm3');
  return hash.update(value).digest('hex');
}

module.exports = sm3;