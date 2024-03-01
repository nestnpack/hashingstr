# Hashing Strings And Compare

An npm package that can hashing strings and compare string hashes with various algorithms is simple and easy

## Installation
Install with npm
```console
npm install hashingstr
```

## Import
With require
```javascript
const hashingstr = require('hashingstr');
```

## Warning
It is recommended to use the latest version of node or node version 12.0.0 and above because there are several crypto algorithms that do not support node version 12.0.0 and below

## Usage
function hash `hashingstr.hash(type algorithm, value)`

function compare `hashingstr.compare(type algorithm, value, hashedValue)`

### Example to use function hash
```javascript
hashingstr.hash('md5', 'test');
//result: 098f6bcd4621d373cade4e832627b4f6
```

### Example to use function compare
```javascript
hashingstr.compare('md5', 'test', '098f6bcd4621d373cade4e832627b4f6');
//result: true

hashingstr.compare('md5', 'tester', '098f6bcd4621d373cade4e832627b4f6');
//result: false
```

## List of supported algorithms
| Name       | Added in Hashingstr version |
| :--------  | :------------------------- |
| md4        | 1.2.2                      |
| md5        | 1.0.0                      |
| mdc2       | 1.2.2                      |
| sha1       | 1.0.0                      |
| sha2-224   | 1.0.0                      |
| sha2-256   | 1.0.0                      |
| sha2-384   | 1.0.0                      |
| sha2-512   | 1.0.0                      |
| sha3-224   | 1.0.0                      |
| sha3-256   | 1.0.0                      |
| sha3-384   | 1.0.0                      |
| sha3-512   | 1.0.0                      |
| whirlpool  | 1.0.0                      |
| ripemd     | 1.2.2                      |
| ripemd160  | 1.0.0                      |
| shake128   | 1.1.0                      |
| shake256   | 1.1.0                      |
| sm3        | 1.1.0                      |
| blake2b512 | 1.1.0                      |
| blake2s256 | 1.1.0                      |
