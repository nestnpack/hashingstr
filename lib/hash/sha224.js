function sha224(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha224');
  return hash.update(value).digest('hex');
}

module.exports = sha224;