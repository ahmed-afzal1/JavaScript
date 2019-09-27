/*
-A closure is inner function that can access outer function
    For every closure we have three scopes
    1. Local scope(Own Scope)
    2. Outer Scope
    3. Global Scope

-Inner function can access outer function properties but outer function can not access inner
 function properties
*/

function retirement (retirementAge)
{
    var a = ' Years left until retirement';
    return function(yearsOfBirth){
        var age = 2018-yearsOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS = retirement(66)(1990);
