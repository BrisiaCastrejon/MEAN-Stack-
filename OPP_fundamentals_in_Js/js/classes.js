/*
* CLASSES => are constructor functions. Always start with a capital letter.
    ? There are primitive classes => in core of Js
        - String, Number, Boolean...
        ? example 
        ? new String()
    ! There are composite classes 
        - Array, Object ...
    TODO: Also there are own classes (by developers)
        - To create it, need the prototype
        - And inyect the properties
 */

 // ? Primitive classes => 
 // * String class
var string = new String("This is a String");
console.log('string', string);

// * Number class
var number = new Number(12);
console.log('number', number );

// * Number boolean
var boolean = new Boolean(false);
console.log('boolean', boolean );

// ! There are composite classes =>
// *Array class
var array = new Array('red, yellow, green');
console.log('array', array);

// *Object class
var object = new Object({
    name: 'María',
    age:30
});
console.log('object', object);

// TODO: Own classes
// *Person class => (Person is the prototype)
function Person() {
  // Public properties 
  this.name;
  this.age;  
};

var person1 = new Person();
person1.name = "María";
person1.age = "55 years old";
console.log('Person1',person1);

// *Classes with parameters
function Pets(specieOfMyPet, nameOfMyPet, breedOfMyPet) {

    this.specie = specieOfMyPet;
    this.name = nameOfMyPet;
    this.breed = breedOfMyPet;
    
};

var myPet = new Pets('dog','Sofi', 'chihuahua');
console.log('My pet: ', myPet);

