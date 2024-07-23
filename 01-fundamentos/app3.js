
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ');
// console.log('Palabras: ', wordCount.length);

const reactFind = /react/ig;

console.log('React: ', content.match(reactFind).length);

