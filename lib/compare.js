//Require hash algorithm
const md5 = require('./compare/md5.js');
const sha1 = require('./compare/sha1.js');
const sha224 = require('./compare/sha224.js');
const sha256 = require('./compare/sha256.js');
const sha384 = require('./compare/sha384.js');
const sha2_512 = require('./compare/sha2-512.js');
const sha3_224 = require('./compare/sha3-224.js');
const sha3_256 = require('./compare/sha3-256.js');
const sha3_384 = require('./compare/sha3-384.js');
const sha3_512 = require('./compare/sha3-512.js');
const whirlpool = require('./compare/whirlpool.js');
const ripemd160 = require('./compare/ripemd160.js');

function compare(type, value, hashedValue) {
  // Check if type is undefined
  if(typeof type === 'undefined') {
    return new Error("Please enter the type compare | example: hashstr.compare('md5', 'This is the message that will be compared', '1d860c97e694e4e4d26068f98efd5793') | result: true");
  }
  
  // Check if value is undefined
  if(typeof value === 'undefined' || typeof hashedValue === 'undefined') {
    return new Error("Please enter the value and hashedValue that will be compared | example: hashstr.compare('md5', 'This is the message that will be compared', '1d860c97e694e4e4d26068f98efd5793') | result: true");
  }
  
  //set to lower case
  type = type.toLowerCase();
  
  // If type is a string
  if(typeof type === 'string') {
    //modules
    
    //md5 module
    if(type === 'md5') {
      return md5(value, hashedValue);
    }
    
    //sha module
    if(type === 'sha1') {
      return sha1(value, hashedValue);
    }
    if(type === 'sha224') {
      return sha224(value, hashedValue);
    }
    if(type === 'sha256') {
      return sha256(value, hashedValue);
    }
    if(type === 'sha384') {
      return sha384(value, hashedValue);
    }
    if(type === 'sha2-512') {
      return sha2_512(value, hashedValue);
    }
    if(type === 'sha3-224') {
      return sha3_224(value, hashedValue);
    }
    if(type === 'sha3-256') {
      return sha3_256(value, hashedValue);
    }
    if(type === 'sha3-384') {
      return sha3_384(value, hashedValue);
    }
    if(type === 'sha3-512') {
      return sha3_512(value, hashedValue);
    }
    
    //whirlpool module
    if(type === 'whirlpool') {
      return whirlpool(value, hashedValue);
    }
    
    //ripemd160 module
    if(type === 'ripemd160') {
      return ripemd160(value, hashedValue);
    }
    
    //If type not found
    return new Error('Type compare: ('+type+') not found');
  }
}

module.exports = compare;