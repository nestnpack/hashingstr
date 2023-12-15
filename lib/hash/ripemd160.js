function ripemd160(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('ripemd160');
  return hash.update(value).digest('hex');
}

module.exports = ripemd160;