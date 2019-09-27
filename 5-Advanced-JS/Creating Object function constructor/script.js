
//constructor

var Person = function(name,yearsOfBirth,job)
            {
                this.name = name;
                this.yearsOfBirth = yearsOfBirth;
                this.job = job;
                this.calculateAge = function(){
                    console.log(2018-this.yearsOfBirth);
                }
            }

Person.prototype.color = 'white';
Person.prototype.calculateAge = function(){
    console.log(2018-this.yearsOfBirth);
}

var john = new Person('john',1990,'teacher');
var jane = new Person('jane',1995,'designer');
var mark = new Person('mark',1992,'driver');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.color);
console.log(jane.color);
console.log(mark.color);