const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
// console.log(first, second);

/*
if the file result-sync.txt not Unavailable node will create the file and put this value `Here Is The Result : ${first}, ${second}` in it  
and if the file was available this value `Here Is The Result : ${first}, ${second}` will override any value was in the file
*/
writeFileSync('./content/result-sync.txt', `Here Is The Result : ${first}, ${second}`, { flag: 'a' });
console.log('done with this task');
console.log('starting the next one');