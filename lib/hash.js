//Require hash algorithm
const md5 = require('./hash/md5.js');
const sha1 = require('./hash/sha1.js');
const sha224 = require('./hash/sha224.js');
const sha256 = require('./hash/sha256.js');
const sha384 = require('./hash/sha384.js');
const sha2_512 = require('./hash/sha2-512.js');
const sha3_224 = require('./hash/sha3-224.js');
const sha3_256 = require('./hash/sha3-256.js');
const sha3_384 = require('./hash/sha3-384.js');
const sha3_512 = require('./hash/sha3-512.js');
const whirlpool = require('./hash/whirlpool.js');
const ripemd160 = require('./hash/ripemd160.js');

function hash(type, value) {
  // Check if type is undefined
  if(typeof type === 'undefined') {
    return new Error("Please enter the type hash | example: hashstr.hash('md5', 'This is the message that will be encrypted') | result: 178d1723eb7acef66f6702bd9939f94c");
  }
  
  // Check if value is undefined
  if(typeof value === 'undefined') {
    return new Error("Please enter the value that will be hashed to ("+type+") | example: hashstr.hash('md5', 'This is the message that will be encrypted') | result: 178d1723eb7acef66f6702bd9939f94c");
  }
  
  //set to lower case
  type = type.toLowerCase();
  
  // If type is a string
  if(typeof type === 'string') {
    //modules
    
    //md5 module
    if(type === 'md5') {
      return md5(value);
    }
    
    //sha module
    if(type === 'sha1') {
      return sha1(value);
    }
    if(type === 'sha224') {
      return sha224(value);
    }
    if(type === 'sha256') {
      return sha256(value);
    }
    if(type === 'sha384') {
      return sha384(value);
    }
    if(type === 'sha2-512') {
      return sha2_512(value);
    }
    if(type === 'sha3-224') {
      return sha3_224(value);
    }
    if(type === 'sha3-256') {
      return sha3_256(value);
    }
    if(type === 'sha3-384') {
      return sha3_384(value);
    }
    if(type === 'sha3-512') {
      return sha3_512(value);
    }
    
    //whirlpool module
    if(type === 'whirlpool') {
      return whirlpool(value);
    }
    
    //ripemd160 module
    if(type === 'ripemd160') {
      return ripemd160(value);
    }
    
    //If type not found
    return new Error('Type hash: ('+type+') not found');
  }
}

module.exports = hash;