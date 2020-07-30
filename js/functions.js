/*
* Function = task to implement or ejecute
TODO: the worf FUNCTION is used to create a function
 */

 //! Functions without parameter
 function toGreet() {
     console.log('I say Hi');
 };
 toGreet();

 //! Functions with parameter
 function add(numer1, number2) {
     
    var result = numer1 + number2;
    console.log('The result is: ', result);
 };
 add(4,8);
 add(10,7);

 //!Functions with return but without parameters
 function returnAvalue() {
     var number = 5;
     return number
 }
console.log(returnAvalue())

 //!Functions with return and whit parameters
 function returnAvalue2(parameterValue) {
     return parameterValue
 };
 console.log(returnAvalue2(10))
