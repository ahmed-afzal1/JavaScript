/**
 Lets remember the first coding challange where mark and John compaired their BMIs. Let`s now 
 now implement the same functionality with object methods.

 1. For each of them, create an object with properties for their full name, mass, and height
 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also
    return it from the method.
 3. In the end, log to the console who has the highest BMI, together with the full name and the
    respective BMI. Don,t forget they might have the same BMI.


    Remember : BMI = mass/height^2 = mass/(height*height). (mass in kg and height in meter)
 
 */

 var mark = {
    fullName : 'Mark',
    mass     : 100,
    height   : 0.14732,
    markBMI  : function()
                {
                    return this.mass/(this.height*this.height);
                }
 };
    x = mark.markBMI();
    console.log(x);


    var john = {
        fullName : 'John',
        mass     : 20,
        height   : 0.15494,
        johnBMI  : function()
                    {
                        return this.mass/(this.height*this.height);
                    }
     };
        y = john.johnBMI();
        console.log(y);

    if(x>y)
    {
        console.log('Mark BMI heigher than John? '+x);
    }else{
        console.log('John BMI heigher than Mark? '+Y);
    }

    
 
