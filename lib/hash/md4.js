'use strict';

function md4(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('md4');
  return hash.update(value).digest('hex');
}

module.exports = md4;