
/* Primitives VS Object
 -Primitives are number,string,boolean,null,undefine
 -everything else are object

 their main difference is that primitives hold their own property but don,t maintain refference
 on the otherhand, Object maintain reference
 */

 //primitives 
 var a =23;
 var b=a;
 a=46;
 console.log(a);
 console.log(b);

 //Object

 var obj1 ={
    name : 'john',
    age  :23,
 };
 var obj2 = obj1;
 obj1.age = 30;

 console.log(obj1.age);
 console.log(obj2.age);