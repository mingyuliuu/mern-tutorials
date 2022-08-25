const path = require('path');

console.log(path.sep)   // Returns "/"

const filePath = path.join('/content', 'subfoler', 'test.txt');
console.log(filePath);  // Returns "/content/subfoler/test.txt"

const base = path.basename(filePath);
console.log(base);      // Returns "test.txt"

// Returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);  
// Returns "/Users/mingyuliu/My-Projects/node-express-course/content/subfolder/test.txt"

