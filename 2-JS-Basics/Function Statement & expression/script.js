
//function decleration
function whatDoYouDo(job,firstName)
    {
        
    }

var whatDoYouDo = function(job,firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName +' teaches kids how to code';
        case 'driver':
            return firstName +' drives a cab in lisbon';
        case 'designer':
            return firstName +' design beutiful websites';
        default:
            return firstName+' does something else';
    }

}

console.log(whatDoYouDo('teacher','teacher'));
