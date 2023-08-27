// npm - global command, comes with node
// npm --version

// local (dependency | package) - use it only in this particular project
// npm install or i <packageName>

// global (dependency | package) - use it in any project
// npm install or i -g <packageName>
// sudo npm install or i  -g <packageName> (mac)

// package.json - maninfest file (store important info about project/package)
// three ways to create a package.json
// 1 manual approach (create package.json in the root, create properties etc)
// 2 npm init (step by step, press enter to skip)
// 3 npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);

