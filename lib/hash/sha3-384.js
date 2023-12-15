function sha3_384(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha3-384');
  return hash.update(value).digest('hex');
}

module.exports = sha3_384;