'use strict';

/**
 * Require compare algorithm
 */

const md5 = require('./compare/md5.js');
const sha1 = require('./compare/sha1.js');
const sha2_224 = require('./compare/sha2-224.js');
const sha2_256 = require('./compare/sha2-256.js');
const sha2_384 = require('./compare/sha2-384.js');
const sha2_512 = require('./compare/sha2-512.js');
const sha3_224 = require('./compare/sha3-224.js');
const sha3_256 = require('./compare/sha3-256.js');
const sha3_384 = require('./compare/sha3-384.js');
const sha3_512 = require('./compare/sha3-512.js');
const whirlpool = require('./compare/whirlpool.js');
const ripemd160 = require('./compare/ripemd160.js');
const shake128 = require('./compare/shake128.js');
const shake256 = require('./compare/shake256.js');
const sm3 = require('./compare/sm3.js');
const blake2b512 = require('./compare/blake2b512.js');
const blake2s256 = require('./compare/blake2s256.js');

function compare(type, value, hashedValue) {
  // check arguments type is undefined
  if(typeof type === 'undefined') {
    return Error("Please enter the type compare \n\nexample: hashstr.compare('md5', 'This is the message that will be compared', '1d860c97e694e4e4d26068f98efd5793') \nresult: true");
  }
  
  // check arguments value or hashedValue is undefined
  if(typeof value === 'undefined' || typeof hashedValue === 'undefined') {
    return Error("Please enter the value and hashedValue that will be compared \n\nexample: hashstr.compare('md5', 'This is the message that will be compared', '1d860c97e694e4e4d26068f98efd5793') \nresult: true");
  }
  
  // set to lower case
  type = type.toLowerCase();
  
  // list algorithm
  const list = ['md5', 'sha1', 'sha2-224', 'sha2-256', 'sha2-384', 'sha2-512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512', 'whirlpool', 'ripemd160', 'shake128', 'shake256', 'sm3', 'blake2b512', 'blake2s256'];
  
  // if type is a string
  if(typeof type === 'string') {
    //md5
    if(type === 'md5') {
      return md5(value, hashedValue);
    }
    
    //sha
    if(type === 'sha1') {
      return sha1(value, hashedValue);
    }
    if(type === 'sha2-224') {
      return sha2_224(value);
    }
    if(type === 'sha2-256') {
      return sha2_256(value);
    }
    if(type === 'sha2-384') {
      return sha2_384(value);
    }
    if(type === 'sha2-512') {
      return sha2_512(value);
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
    
    //whirlpool
    if(type === 'whirlpool') {
      return whirlpool(value, hashedValue);
    }
    
    //ripemd160
    if(type === 'ripemd160') {
      return ripemd160(value, hashedValue);
    }
    
    //shake
    if(type === 'shake128') {
      return shake128(value);
    }
    
    if(type === 'shake256') {
      return shake256(value);
    }
    
    //sm3
    if(type === 'sm3') {
      return sm3(value);
    }
    
    //blake
    if(type === 'blake2b512') {
      return blake2b512(value);
    }
    
    if(type === 'blake2s256') {
      return blake2s256(value);
    }
    
    // if algorithm not found
    if(!list.includes(type)) {
      return Error('Type compare: ('+type+') not found \n\nList of supported algorithms \n' + JSON.stringify(modules));
    }
  }
}

module.exports = compare;