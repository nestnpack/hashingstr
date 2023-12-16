function sha2_256(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('sha256');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = sha2_256;