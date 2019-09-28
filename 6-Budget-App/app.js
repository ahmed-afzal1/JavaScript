//BUDGET CONTROLLER

var budgetController = (function(){
 
    //some code
    
})();

//UI CONTROLLER

var UIcontroller = (function(){

    var DOMString = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn',
    }

    return{
        getInput : function(){
            return{
                type : document.querySelector(DOMString.inputType).value,
                description : document.querySelector(DOMString.inputDescription).value,
                value : document.querySelector(DOMString.inputValue).value,
            }
        },
        getDomStrings : function()
        {
            return DOMString;
        }
    }


})();

//GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl,UIctrl){

    var DOM = UIctrl.getDomStrings();

    var ctrlAddItem = function(){
        
        // 1. Get the field input Data
                var input = UIctrl.getInput();
                console.log(input);

        // 2. Add item to the budget controller


        // 3. Add the new item in user interface

        // 4. Calculate the budget

        // 5. Display the budget
        
    }

 
    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);  

    document.addEventListener('keypress',function(event){
        if(event.keyCode===13 || event.which===13){
            ctrlAddItem();
        }
    });

})(budgetController,UIcontroller);