/*
MIT License
Copyright (c) 2024 Nest Packages

 ---------- Hashingstr V1.2.0 ---------- 
*/

'use strict';

const hashingstr = (function() {
  const encoder = new TextEncoder();
  
  //library hash
  const h = {
    md5: () => {
      return 'algorithm (md5) not support in crypto browser';
    },
    sha1: async (value) => {
      const data = encoder.encode(value);
      const hashBuffer = await crypto.subtle.digest('SHA-1', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    },
    sha2_224: () => {
      return 'algorithm (sha2-224) not support in crypto browser';
    },
    sha2_256: async (value) => {
      const data = encoder.encode(value);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    },
    sha2_384: async (value) => {
      const data = encoder.encode(value);
      const hashBuffer = await crypto.subtle.digest('SHA-384', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    },
    sha2_512: async (value) => {
      const data = encoder.encode(value);
      const hashBuffer = await crypto.subtle.digest('SHA-512', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    },
    sha3_224: () => {
      return 'algorithm (sha3-224) not support in crypto browser';
    },
    sha3_256: () => {
      return 'algorithm (sha3-256) not support in crypto browser';
    },
    sha3_384: () => {
      return 'algorithm (sha3-384) not support in crypto browser';
    },
    sha3_512: () => {
      return 'algorithm (sha3-512) not support in crypto browser';
    },
    whirlpool: () => {
      return 'algorithm (whirlpool) not support in crypto browser';
    },
    ripemd160: () => {
      return 'algorithm (ripemd160) not support in crypto browser';
    },
    shake128: () => {
      return 'algorithm (shake128) not support in crypto browser';
    },
    shake256: () => {
      return 'algorithm (shake256) not support in crypto browser';
    },
    sm3: () => {
      return 'algorithm (sm3) not support in crypto browser';
    },
    blake2b512: () => {
      return 'algorithm (blake2b512) not support in crypto browser';
    },
    blake2s256: () => {
      return 'algorithm (blake2s256) not support in crypto browser';
    }
  }
  
  
  //library compare
  const c = {
    md5: (value, hashedValue) => {
      const result = h.md5(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha1: (value, hashedValue) => {
      const result = h.sha1(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha2_224: (value, hashedValue) => {
      const result = h.sha2_224(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha2_256: (value, hashedValue) => {
      const result = h.sha2_256(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha2_384: (value, hashedValue) => {
      const result = h.sha2_384(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha2_512: (value, hashedValue) => {
      const result = h.sha2_512(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha3_224: (value, hashedValue) => {
      const result = h.sha3_224(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha3_256: (value, hashedValue) => {
      const result = h.sha3_256(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha3_384: (value, hashedValue) => {
      const result = h.sha3_384(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sha3_512: (value, hashedValue) => {
      const result = h.sha3_512(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    whirlpool: (value, hashedValue) => {
      const result = h.whirlpool(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    ripemd160: (value, hashedValue) => {
      const result = h.ripemd160(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    shake128: (value, hashedValue) => {
      const result = h.shake128(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    shake256: (value, hashedValue) => {
      const result = h.shake256(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    sm3: (value, hashedValue) => {
      const result = h.sm3(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    blake2b512: (value, hashedValue) => {
      const result = h.blake2b512(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    },
    blake2s256: (value, hashedValue) => {
      const result = h.blake2s256(value);
      if(result.search('algorithm') >= 0) return result;
      return result === hashedValue;
    }
  }
  
  //function hash
  function hash(type, value) {
    // Check if type is undefined
    if(typeof type === 'undefined') {
      return Error("Please enter the type hash \n\nexample: hashstr.hash('md5', 'This is the message that will be encrypted') \nresult: 178d1723eb7acef66f6702bd9939f94c");
    }
    
    // Check if value is undefined
    if(typeof value === 'undefined') {
      return Error("Please enter the value that will be hashed to ("+type+") \n\nexample: hashstr.hash('md5', 'This is the message that will be encrypted') \nresult: 178d1723eb7acef66f6702bd9939f94c");
    }
    
    //set to lower case
    type = type.toLowerCase();
    
    //list modules
    const modules = ['md5', 'sha1', 'sha2-224', 'sha2-256', 'sha2-384', 'sha2-512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512', 'whirlpool', 'ripemd160', 'shake128', 'shake256', 'sm3', 'blake2b512', 'blake2s256'];
    
    // If type is a string
    if(typeof type === 'string') {
      //modules
      
      //md5 module
      if(type === 'md5') {
        return h.md5(value);
      }
      
      //sha module
      if(type === 'sha1') {
        return h.sha1(value);
      }
      if(type === 'sha2-224') {
        return h.sha2_224(value);
      }
      if(type === 'sha2-256') {
        return h.sha2_256(value);
      }
      if(type === 'sha2-384') {
        return h.sha2_384(value);
      }
      if(type === 'sha2-512') {
        return h.sha2_512(value);
      }
      if(type === 'sha3-224') {
        return h.sha3_224(value);
      }
      if(type === 'sha3-256') {
        return h.sha3_256(value);
      }
      if(type === 'sha3-384') {
        return h.sha3_384(value);
      }
      if(type === 'sha3-512') {
        return h.sha3_512(value);
      }
      
      //whirlpool module
      if(type === 'whirlpool') {
        return h.whirlpool(value);
      }
      
      //ripemd160 module
      if(type === 'ripemd160') {
        return h.ripemd160(value);
      }
      
      //shake module
      if(type === 'shake128') {
        return h.shake128(value);
      }
      
      if(type === 'shake256') {
        return h.shake256(value);
      }
      
      //sm3 module
      if(type === 'sm3') {
        return h.sm3(value);
      }
      
      //blake module
      if(type === 'blake2b512') {
        return h.blake2b512(value);
      }
      
      if(type === 'blake2s256') {
        return h.blake2s256(value);
      }
      
      //If type not found
      if(!modules.includes(type)) {
        return Error('Type hash: ('+type+') not found \n\nList of supported algorithms \n' + JSON.stringify(modules));
      }
    }
  }
  
  //function compare
  function compare(type, value, hashedValue) {
    // Check if type is undefined
    if(typeof type === 'undefined') {
      return Error("Please enter the type compare \n\nexample: hashstr.compare('md5', 'This is the message that will be compared', '1d860c97e694e4e4d26068f98efd5793') \nresult: true");
    }
    
    // Check if value is undefined
    if(typeof value === 'undefined' || typeof hashedValue === 'undefined') {
      return Error("Please enter the value and hashedValue that will be compared \n\nexample: hashstr.compare('md5', 'This is the message that will be compared', '1d860c97e694e4e4d26068f98efd5793') \nresult: true");
    }
    
    //set to lower case
    type = type.toLowerCase();
    
    //list modules
    const modules = ['md5', 'sha1', 'sha2-224', 'sha2-256', 'sha2-384', 'sha2-512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512', 'whirlpool', 'ripemd160', 'shake128', 'shake256', 'sm3', 'blake2b512', 'blake2s256'];
    
    // If type is a string
    if(typeof type === 'string') {
      //modules
      
      //md5 module
      if(type === 'md5') {
        return c.md5(value, hashedValue);
      }
      
      //sha module
      if(type === 'sha1') {
        return c.sha1(value, hashedValue);
      }
      if(type === 'sha2-224') {
        return c.sha2_224(value);
      }
      if(type === 'sha2-256') {
        return c.sha2_256(value);
      }
      if(type === 'sha2-384') {
        return c.sha2_384(value);
      }
      if(type === 'sha2-512') {
        return c.sha2_512(value);
      }
      if(type === 'sha3-224') {
        return c.sha3_224(value, hashedValue);
      }
      if(type === 'sha3-256') {
        return c.sha3_256(value, hashedValue);
      }
      if(type === 'sha3-384') {
        return c.sha3_384(value, hashedValue);
      }
      if(type === 'sha3-512') {
        return c.sha3_512(value, hashedValue);
      }
      
      //whirlpool module
      if(type === 'whirlpool') {
        return c.whirlpool(value, hashedValue);
      }
      
      //ripemd160 module
      if(type === 'ripemd160') {
        return c.ripemd160(value, hashedValue);
      }
      
      //shake module
      if(type === 'shake128') {
        return c.shake128(value);
      }
      
      if(type === 'shake256') {
        return shake256(value);
      }
      
      //sm3 module
      if(type === 'sm3') {
        return c.sm3(value);
      }
      
      //blake module
      if(type === 'blake2b512') {
        return c.blake2b512(value);
      }
      
      if(type === 'blake2s256') {
        return c.blake2s256(value);
      }
      
      //If type not found
      if(!modules.includes(type)) {
        return Error('Type compare: ('+type+') not found \n\nList of supported algorithms \n' + JSON.stringify(modules));
      }
    }
  }
  
  //export
  const hashingstr = {
    hash,
    compare
  }
  
  return hashingstr;
})();