function sha2_224(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha224');
  return hash.update(value).digest('hex');
}

module.exports = sha2_224;