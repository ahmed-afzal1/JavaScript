/*
Object can be created in two way
1. new instance
2. Object.create
*/

var personProto = {
    calculateAge : function(){
                    console.log(2018-this.yearsOfBirth);
                    }
};

var john = Object.create(personProto,{
    name:{value:'john'},
    job:{value:'teacher'},
    age:{value:1990}
});

var jane = Object.create(personProto,{
    name:{value:'jane'},
    job:{value:'designer'},
    age:{value:1992}
});