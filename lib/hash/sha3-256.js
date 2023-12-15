function sha3_256(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha3-256');
  return hash.update(value).digest('hex');
}

module.exports = sha3_256;