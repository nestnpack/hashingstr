function sha3_384(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('sha3-384');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = sha3_384;