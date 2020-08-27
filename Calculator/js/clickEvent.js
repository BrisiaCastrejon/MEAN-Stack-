/*
Logical will be separte in objects with properties and objects with methods
*/

// ? Object with properties
var objProperties = {
    // Store calculator keys
    allKeys: document.querySelectorAll('#calculator ul li'),
    // Get a key
    action: null,
    digit: null,
    //Show data
    operations: document.querySelector('#operations'),
    //Limit symbols
    putOneSymbol: 0,
    //Limit decimal
    putOneDecimal: false,
    //Delete result
    otherOperation: false
};

// ? Object with methods
var objMethods = {
    //Start logic 
    start: function () {
        for (var i = 0; i < objProperties.allKeys.length; i++) {
            objProperties.allKeys[i].addEventListener('click', objMethods.clickOnKey)            
        }
    },

    clickOnKey: function (onKey) {
        //get a key
        objProperties.action = onKey.target.getAttribute('class');
        objProperties.digit = onKey.target.innerHTML;
        objMethods.calculator(objProperties.action, objProperties.digit);
    },

    calculator: function (action, digit) {

        switch (action) {
            case 'number':
                objProperties.putOneSymbol = 0;
                if (objProperties.operations.innerHTML == 0){
                    objProperties.operations.innerHTML = digit;
                }else {
                    if (objProperties.otherOperation) {
                        objProperties.otherOperation = false;
                        objProperties.operations.innerHTML = digit
                    } else {
                        objProperties.operations.innerHTML += digit;
                    };                   
                };                
                break;
            case 'symbol':
                objProperties.putOneSymbol++;
                if (objProperties.putOneSymbol == 1) {
                    if (objProperties.operations.innerHTML == 0) {
                        objProperties.operations.innerHTML = 0;
                    }else{
                        objProperties.operations.innerHTML += digit;
                        objProperties.putOneDecimal = false;
                        objProperties.otherOperation = false;
                    };
                };                
                break
            case 'decimal':
                if (!objProperties.putOneDecimal) {
                    objProperties.operations.innerHTML += digit;
                    objProperties.putOneDecimal = true;
                };               
                break
            case 'equal':
                objProperties.operations.innerHTML = eval(objProperties.operations.innerHTML);
                objProperties.otherOperation = true;
                break;
        }        
    },

    deleteCalculator: function () {
        objProperties.operations.innerHTML = 0;       
    }
};

objMethods.start()