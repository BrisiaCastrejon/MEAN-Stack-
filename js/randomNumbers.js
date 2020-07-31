/*
* Random numbers with a method of JS
* Math Object can do a operations with numbers 
 */

var randomNumber = document.querySelector('#randomNumber');
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');

// ? Math.random = return a random number in decimals except 1 (0.9....)
var number = 0;
number = Math.random();

// ? Math.floor = rounds to the smallest number in the decimal
var otherNumber = Math.random()*10;
var floorNumber = Math.floor(otherNumber);
var ceilNumber = Math.ceil(otherNumber);

// ? Math.ceil = rounds to the maximum number in the decimal
randomNumber.innerHTML = otherNumber;
number1.innerHTML = floorNumber;
number2.innerHTML = ceilNumber;
 
// ? Math.round = function returns the value of a number rounded to the nearest integer
console.log('6.4', Math.round(6.4));
console.log('6.5', Math.round(6.5));
console.log('6.6', Math.round(6.6));

