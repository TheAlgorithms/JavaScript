const fs = require ('fs');
const crypto = require('crypto');

// Read the encrypted data from the file as binary
const encryptedData = fs.readFileSync('pathtoEncryptedFile');

// Extract the IV (first 16 bytes) and the actual encrypted data
const iv = encryptedData.slice(0, 16);
const encryptedFileData = encryptedData.slice(16);

// Define your decryption key (the same key used for encryption)
const decryptionKey = 'YOURDecryptionKey'; // Replace with the same key used for encryption

// Create a decipher object
const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(decryptionKey), iv);

// Decrypt the encrypted data
const decryptedData = Buffer.concat([decipher.update(encryptedFileData), decipher.final()]);

// Save the decrypted data to a file
fs.writeFileSync('orignalfilenamewithextention', decryptedData);

console.log('File decrypted and saved.');
