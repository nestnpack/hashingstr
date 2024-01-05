function blake2s(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('blake2s256');
  return hash.update(value).digest('hex');
}

module.exports = blake2s;