
const SayHi= require ('./3-Modules')
const names= require('./3-variable')
const persons= require ('./4-alternate-exporting')
require('./5-Mind-Grenade')


SayHi('Hamad');
SayHi(names.john);
SayHi(names.peter);

console.log(persons);

console.log(persons.items);

console.log(persons.singlePerson.name);

