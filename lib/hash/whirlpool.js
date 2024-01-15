'use strict';

function whirlpool(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('whirlpool');
  return hash.update(value).digest('hex');
}

module.exports = whirlpool;