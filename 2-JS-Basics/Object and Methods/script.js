/**
  Object and Methods
 */

 var john = {
    firstName : 'john',
    lastName  : 'smith',
    birthYear : 1992,
    family    : ['Jane','Mark','Bob','Emily'],
    job       : 'teacher',
    isMarried : false,
    calcAge   : function()
               {
                  return 2018-this.birthYear;
               }
 };
 console.log(john.calcAge());
 