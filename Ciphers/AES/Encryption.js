const fs = require('fs');
const crypto = require('crypto');

// Read the file as binary data
const fileData = fs.readFileSync('pathtofileToEncrypt');

// Define your encryption key and initialization vector (IV)
const encryptionKey = 'YOUREncryptionKey'; // Replace with a strong key
const iv = crypto.randomBytes(16); // Generate a random IV

// Create a cipher object
const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv);

// Encrypt the file data
const encryptedData = Buffer.concat([iv, cipher.update(fileData), cipher.final()]);

// Save the encrypted data to a file
fs.writeFileSync('nameofFiletoBesaved', encryptedData);

console.log('File encrypted and saved.');
