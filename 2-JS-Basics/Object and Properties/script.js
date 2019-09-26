/**
  Object and properties are like arays but it have key value pairs
 */

 var john = {
    firstName : 'john',
    lastName  : 'smith',
    birthYear : 1990,
    family    : ['Jane','Mark','Bob','Emily'],
    job       : 'teacher',
    isMarried : false
 };
 console.log(john);
 console.log(john.firstName);
 console.log(john['lastName']);

 var jane = new Object();
 jane.firstName = 'jane';
 jane['lastName'] = 'Mia';

 console.log(jane);