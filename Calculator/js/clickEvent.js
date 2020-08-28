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
        // it can be here also
        // ? document.addEventListener('keydown', objMethods.onPress);
    },

    keyboard: function () {
       document.addEventListener('keydown', objMethods.onPress); 
    },
    
    onPress: function (keyboardKey) {
        if (keyboardKey.keyCode == 48 || keyboardKey.keyCode == 96) {
            objProperties.action = 'number';
            objProperties.digit = 0;
        }
        else if (keyboardKey.keyCode == 49 || keyboardKey.keyCode == 97) {
            objProperties.action = 'number';
            objProperties.digit = 1;
        }
        else if (keyboardKey.keyCode == 50 || keyboardKey.keyCode == 98) {
            objProperties.action = 'number';
            objProperties.digit = 2;
        }
        else if (keyboardKey.keyCode == 51 || keyboardKey.keyCode == 99) {
            objProperties.action = 'number';
            objProperties.digit = 3;
        }
        else if (keyboardKey.keyCode == 52 || keyboardKey.keyCode == 100) {
            objProperties.action = 'number';
            objProperties.digit = 4;
        }
        else if (keyboardKey.keyCode == 53 || keyboardKey.keyCode == 101) {
            objProperties.action = 'number';
            objProperties.digit = 5;
        }
        else if (keyboardKey.keyCode == 54 || keyboardKey.keyCode == 102) {
            objProperties.action = 'number';
            objProperties.digit = 6;
        }
        else if (keyboardKey.keyCode == 55 || keyboardKey.keyCode == 103) {
            objProperties.action = 'number';
            objProperties.digit = 7;
        }
        else if (keyboardKey.keyCode == 56 || keyboardKey.keyCode == 104) {
            objProperties.action = 'number';
            objProperties.digit = 8;
        }
        else if (keyboardKey.keyCode == 57 || keyboardKey.keyCode == 105) {
            objProperties.action = 'number';
            objProperties.digit = 9;
        }
        else if (keyboardKey.keyCode == 187 || keyboardKey.keyCode == 107) {
            objProperties.action = 'symbol';
            objProperties.digit = '+';
        }
        else if (keyboardKey.keyCode == 189 || keyboardKey.keyCode == 109) {
            objProperties.action = 'symbol';
            objProperties.digit = '-';
        }
        else if (keyboardKey.keyCode == 88 || keyboardKey.keyCode == 106) {
            objProperties.action = 'symbol';
            objProperties.digit = '*';
        }
        else if (keyboardKey.keyCode == 111) {
            objProperties.action = 'symbol';
            objProperties.digit = '/';
        }
        else if (keyboardKey.keyCode == 190 || keyboardKey.keyCode == 110) {
            objProperties.action = 'decimal';
            objProperties.digit = '.';
        }
        else if (keyboardKey.keyCode == 13) {
            objProperties.action = 'equal';
        }
        else if (keyboardKey.keyCode == 8 || keyboardKey.keyCode == 46) {
            objProperties.action = '';
            objMethods.deleteCalculator();
        }
        else{
            objProperties.action = '';
            objProperties.digit = '';
        }
        objMethods.calculator(objProperties.action, objProperties.digit);
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
                if (objProperties.operations.innerHTML == '0'){
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
                if (objProperties.putOneSymbol == '1') {
                    if (objProperties.operations.innerHTML == '0') {
                        objProperties.operations.innerHTML = 0;
                    }else{
                        objProperties.operations.innerHTML += digit;
                        objProperties.putOneDecimal = false;
                        objProperties.otherOperation = false;
                    };
                };                
                break
            case 'decimal':
                if (!objProperties.putOneDecimal && objProperties.putOneSymbol != 1) {
                    objProperties.operations.innerHTML += digit;
                    objProperties.putOneDecimal = true;
                    objProperties.otherOperation = false;
                };               
                break
            case 'equal':
                objProperties.operations.innerHTML = eval(objProperties.operations.innerHTML);
                var rgexExpression = /./g;
                if (!rgexExpression.test(objProperties.operations.innerHTML)) {
                    objProperties.putOneDecimal = true;
                }
                objProperties.otherOperation = true;
                break;
        }        
    },

    deleteCalculator: function () {
        objMethods.otherOperation = false;
        objProperties.operations.innerHTML = 0;       
    }
};

objMethods.start();
objMethods.keyboard();