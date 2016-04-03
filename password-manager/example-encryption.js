var crypto = require('crypto-js');

// var secretMessage = 'I hid the chips under the couch.';

var secretMessage = {
  name: 'Mo',
  secretName: '007',
};

var secretKey = '123abc';

var secretMessageJSON = JSON.stringify(secretMessage);

var encryptedMessage = crypto.AES.encrypt(secretMessageJSON, secretKey);

console.log('encrypted message: ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessageJSON = bytes.toString(crypto.enc.Utf8);

var decryptedMessage = JSON.parse(decryptedMessageJSON);

console.log('decrypted name: ' + decryptedMessage.name);
console.log('decrypted secret name: ' + decryptedMessage.secretName);
