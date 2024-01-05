function blake2b(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('blake2b512');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = blake2b;