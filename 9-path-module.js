const path = require('path');

console.log(path.sep); // \

// const filePath = path.join('./content/subfolder/test.txt');
// const filePath = path.join('/content/subfolder/test.txt');

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);  // \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base); // test.txt

// const absolute = path.resolve(__dirname, './content/subfolder/test.txt');
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); // path.resolve (accepts a sequence of paths)
console.log(absolute); // C:\Users\Gaming\OneDrive\Desktop\tutorial\content\subfolder\test.txt