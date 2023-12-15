function sha384(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha384');
  return hash.update(value).digest('hex');
}

module.exports = sha384;