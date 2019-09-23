
function calculateAge(birthYear)
    {
        return 2018-birthYear;
    }
    var johnAge = calculateAge(1990);
    var mikeAge = calculateAge(1992);
    var marryAge = calculateAge(1996);
console.log(johnAge,mikeAge,marryAge);

function yearsUntillRetirement(year,firstName)
 {
     var age = calculateAge(year);
     var retirement = 65-age;
     if(retirement>0)
        {
            console.log(retirement+' years left');
        }
        else
        {
            console.log('Already retired!!!');
        }
 
 }
 yearsUntillRetirement(1990,'John');