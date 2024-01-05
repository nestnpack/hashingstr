function shake256(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('shake256');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = shake256;