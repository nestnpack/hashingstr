# Hashing Strings And Compare

An npm package that can hashing strings and compare string hashes with various algorithms is simple and easy

## Installation
Install with npm
```console
npm install hashingstr
```

After installing, do the import

With require
```javascript
const hashingstr = require('hashingstr');
```

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
| algorithm |
| :-------- |
| md5 |
| sha1 |
| sha2-224 |
| sha2-256 |
| sha2-384 |
| sha2-512 |
| sha3-224 |
| sha3-256 |
| sha3-384 |
| sha3-512 |
| whirlpool |
| ripemd160 |
