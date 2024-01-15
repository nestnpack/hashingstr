'use strict';

function sha1(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha1');
  return hash.update(value).digest('hex');
}

module.exports = sha1;