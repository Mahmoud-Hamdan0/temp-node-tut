//-------------------------- CommonJS, every file is module (be default)
//-------------------------- Modules -- Encapsulated Code (only share minimum)

// ------------------------------------------
// // For More Example To Learn
// const {john, peter} = require('./4-names');
// ------------------------------------------
const names = require('./4-names');
const sayHi = require('./5-utils'); 
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
// console.log(data);
// console.log(data.items);
// console.log(data.singlePerson);
// console.log(data.singlePerson.name);
// console.log(names);
// ------------------------------------------
// // For More Example To Learn
// console.log(john);
// console.log(peter);
// ------------------------------------------
// sayHi('susen');
// sayHi(names.john);
// sayHi(names.peter);