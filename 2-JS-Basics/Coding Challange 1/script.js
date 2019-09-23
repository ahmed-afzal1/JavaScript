/******
 Mark and John are trying to compare there BMI(Body Mass Index) which is calculating using
 using the formula,
 BMI = mass/height^2 = mass/(height*height)
 Mass in KG and height in meter


 1. Store Marks and Johns mass and height in variable
 2. Calculate Both their BMI
 3. Creating a boolean variable containing information about
    whether mark has heigher BMI than John
 4. Print a string to the console containing the variable from step 3
    (Something "Is mark BMI heigher than john?")
 */

 var markBMI,johnBMI,markheight,johnheight,markMass,johnMass;
 markMass = 100;
 johnMass = 20;
 markheight = 0.14732;
 johnheight = 0.15494;

 markBMI = markMass/(markheight*markheight);
 console.log(markBMI);

 johnBMI = johnMass/(johnheight*johnheight);
 console.log(johnBMI);

 var heigherBMI = markBMI>johnBMI;
 console.log('Is mark BMI heigher than john? '+heigherBMI);

