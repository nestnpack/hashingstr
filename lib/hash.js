'use strict';

/**
 * Require hash algorithm
 */

const md5 = require('./hash/md5.js');
const sha1 = require('./hash/sha1.js');
const sha2_224 = require('./hash/sha2-224.js');
const sha2_256 = require('./hash/sha2-256.js');
const sha2_384 = require('./hash/sha2-384.js');
const sha2_512 = require('./hash/sha2-512.js');
const sha3_224 = require('./hash/sha3-224.js');
const sha3_256 = require('./hash/sha3-256.js');
const sha3_384 = require('./hash/sha3-384.js');
const sha3_512 = require('./hash/sha3-512.js');
const whirlpool = require('./hash/whirlpool.js');
const ripemd160 = require('./hash/ripemd160.js');
const shake128 = require('./hash/shake128.js');
const shake256 = require('./hash/shake256.js');
const sm3 = require('./hash/sm3.js');
const blake2b512 = require('./hash/blake2b512.js');
const blake2s256 = require('./hash/blake2s256.js');

function hash(type, value) {
  //check arguments type is undefined
  if(typeof type === 'undefined') {
    return Error("Please enter the type hash \n\nexample: hashstr.hash('md5', 'This is the message that will be encrypted') \nresult: 178d1723eb7acef66f6702bd9939f94c");
  }
  
  //check arguments value is undefined
  if(typeof value === 'undefined') {
    return Error("Please enter the value that will be hashed to ("+type+") \n\nexample: hashstr.hash('md5', 'This is the message that will be encrypted') \nresult: 178d1723eb7acef66f6702bd9939f94c");
  }
  
  //set to lower case
  type = type.toLowerCase();
  
  //list algorithm
  const list = ['md5', 'sha1', 'sha2-224', 'sha2-256', 'sha2-384', 'sha2-512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512', 'whirlpool', 'ripemd160', 'shake128', 'shake256', 'sm3', 'blake2b512', 'blake2s256'];
  
  //if type is a string
  if(typeof type === 'string') {
    //md5
    if(type === 'md5') {
      return md5(value);
    }
    
    //sha
    if(type === 'sha1') {
      return sha1(value);
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
    
    //whirlpool
    if(type === 'whirlpool') {
      return whirlpool(value);
    }
    
    //ripemd160
    if(type === 'ripemd160') {
      return ripemd160(value);
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
    
    //if algorithm not found
    if(!list.includes(type)) {
      return Error('Type hash: ('+type+') not found \n\nList of supported algorithms \n' + JSON.stringify(modules));
    }
  }
}

module.exports = hash;