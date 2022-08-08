const os = require('os');
var totalmem = os.totalmem();
var freemem = os.freemem();

console.log(os.cpus());
console.log('totalmem: ' + totalmem,'freemem: ' + freemem);

const fs = require('fs');
const files = fs.readdirSync('./');
console.log('files: ' + files);