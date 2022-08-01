//npm : global command which comes with node

//module, dependency , package : same terms

//local dependency : use in a particular project
//npm i <package name>

//global dependency : use in any project
//npm install -g <package name>

//package.json : manifest file. store important inffo about project/package
//manual approach : create package.json file in root, add properties etc
//npm init (step by step, press enter to skip)
//npm init -y (everyting default)

const lodash =  require ('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);