function shake128(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('shake128');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = shake128;