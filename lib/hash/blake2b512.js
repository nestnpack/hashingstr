function blake2b512(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('blake2b512');
  return hash.update(value).digest('hex');
}

module.exports = blake2b512;