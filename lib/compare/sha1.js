function sha1(value, hashedValue) {
  const crypto = require('crypto');
  let hash = crypto.createHash('sha1');
  hash = hash.update(value).digest('hex');
  return hash === hashedValue;
}

module.exports = sha1;