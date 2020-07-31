/** 
 * * Works in Client side (navegator)
 * * JavaScript --> sensitive to uppercase and lowercase 
 * ! Some reserved words in JavaScript
 *      *var, let, const, function, if, else, for, import, return, catch while .... 
 * TODO: VAR, LET AND CONST are used to name a variable and variable is a data type  
*/

// ? data types: number
var number = 5;
console.log("a number:", number);

// ? data types: string
var word = "word";
console.log("a word:", word);

// ? data types: boolean 
var trueOrFalse = true;
console.log("a boolean:", trueOrFalse);

// ? data types: array
var colors = ["red", "blue", "dark"];
console.log("an array:", colors);

// ? to get a value in an array
console.log("This is a color from colors[]:", colors[0]);


// ? data types: object (propertie:value) 
//* first opcion (sintaxis)
var juice = {
    "fruitOne":"orange",
    "fruitTwo":"banana",
    "fruitThre":"lemon"
};
console.log("These are fruits for a juice:", juice);

// ? data types: object (propertie:value) 
//* second opcion (sintaxis)
var otherJuice = {
    fruitOne:"orange",
    fruitTwo:"banana",
    fruitThre:"lemon"
};
console.log("These are fruits for a otherJuice:", otherJuice);

// ? to get a value in an object 
console.log("This is a fruit for a juice{}:", juice.fruitOne);
console.log("This is a fruit for otherJuice{}:", otherJuice.fruitTwo);

// ? to concatenate is a method to add one or more variables in a specific one
var name = 'Joana';
var age = 35;
console.log('Mi sister name is ' + name + ' and she is ' + age + ' years old');
