var firstName = 'john';
var age       = 14;

//Ternary Operator

age>=14 ? console.log(firstName+' drinks juice'):console.log(firstName+' drinks beer');

//Switch Statement

var job = 'Teacher';

switch(job)
{
    case 'Teacher':
        console.log(firstName+' teach codes to the kids');
        break;
    case 'Driver':
        console.log(firstName+' Drivers pathao in Dhaka');
        break;
    default:
        console.log(firstName+' Doing something else');
}