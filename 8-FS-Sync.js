const fs = require ('fs');
// both up and above code are same
//const {readFileSync , writeFileSync} = require ('fs');


//reading a file
const first = fs.readFileSync('./Content/textFirst.txt', 'utf8');
const second = fs.readFileSync('./Content/textSecond.txt','utf8');
console.log(first , second);

//writing a file

const result = fs.writeFileSync('./Content/result.txt',first + second);

//over riding a saved file

const overrideResult = fs.writeFileSync('./Content/result.txt', 'overrided', {flag:'a'} );
