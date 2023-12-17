//Require compare algorithm
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

function compare(type, value, hashedValue) {
  // Check if type is undefined
  if(typeof type === 'undefined') {
    return new Error("Please enter the type compare \n\nexample: hashstr.compare('md5', 'This is the message that will be compared', '1d860c97e694e4e4d26068f98efd5793') \nresult: true");
  }
  
  // Check if value is undefined
  if(typeof value === 'undefined' || typeof hashedValue === 'undefined') {
    return new Error("Please enter the value and hashedValue that will be compared \n\nexample: hashstr.compare('md5', 'This is the message that will be compared', '1d860c97e694e4e4d26068f98efd5793') \nresult: true");
  }
  
  //set to lower case
  type = type.toLowerCase();
  
  //list modules
  const modules = ['md5', 'sha1', 'sha2-224', 'sha2-256', 'sha2-384', 'sha2-512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512', 'whirlpool', 'ripemd160'];
  
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
    
    //whirlpool module
    if(type === 'whirlpool') {
      return whirlpool(value, hashedValue);
    }
    
    //ripemd160 module
    if(type === 'ripemd160') {
      return ripemd160(value, hashedValue);
    }
    
    //If type not found
    if(!modules.includes(type)) {
      return new Error('Type compare: ('+type+') not found \n\nList of supported algorithms \n' + JSON.stringify(modules));
    }
  }
}

module.exports = compare;