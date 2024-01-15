'use strict';

function md5(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('md5');
  return hash.update(value).digest('hex');
}

module.exports = md5;