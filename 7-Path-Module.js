const path = require ('path');


//system path separator
console.log(path.sep);


//joined path 
const joinedPath = path.join('/Content','Subfolder','text.txt');
console.log(joinedPath);

//base file name of a path

const base = path.basename(joinedPath);
console.log(base)


//absolute path
const absolute = path.resolve(__dirname,'Content','Subfolder','text.txt');
console.log(absolute);
