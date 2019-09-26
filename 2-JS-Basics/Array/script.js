//Intialize Array

var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names.length);

//Mutate Array
names[1] = 'Ben';
names[names.length] = 'Marry';
console.log(names);

//different data types

var john = ['john','smith',1990,'teacher',false];

john.push('Marry');
john.unshift('ikram');
john.pop();
john.pop();
john.shift();
john.shift();
console.log(john);

var isDesigner = john.indexOf('designer')===-1?'John is not a designer':'john is a designer';
console.log(isDesigner); 