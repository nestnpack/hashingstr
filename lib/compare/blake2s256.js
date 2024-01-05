function blake2s256(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('blake2s256');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = blake2s256;