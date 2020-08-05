/*
? OBJECTS => is a collection of properties and methods.
    -EXAMPLE
    function Person() { 
        this.name; ==>  this is a propertie
        this.age;  ==> this is a propertie
    };
    var person1 = new Person();
    person1.name = "María"; ===> .name is an inherited property of class Person
    person1.age = "55 years old"; ===> .age is an inherited property of class Person
    ? You can create objects with their own properties without inheriting them from a class
    ? Even you can add a method in the object. 
    
 */
// ? OBJECTS ==> 
var object = {
    // A propertie is an asosiation betwen a name and a value.
    name: 'María',
    age: 31,
    // A method is a function in core of an object 
    toDescribe: function () {
        console.log('Her name is: ' + object.name + ' and she is ' + object.age + ' years old');
    },
    // To create a method with parameters
    toGreet: function (greeting ) {
        console.log(greeting + ' ' +  object.name);
    }
    
};
console.log('Object name: ' + object.name);
console.log('Object age: ' + object.age);
object.toDescribe();
object.toGreet('Hola');

// * Primitive objects
/* 
   - https://www.w3schools.com/js/js_date_methods.asp
   ! Date object ==> uses to get a specific date and hour
*/

var aDate = new Date();
console.log('Today: ' + aDate); 
var year = aDate.getFullYear();
console.log('We are in: ' + year);
