/*
 *Conditinals = to guide the flow of the program
 */

 // ! IF, ELSE IF, ELSE = to campare values
 var value1 = 15;
 var value2 = 10;
 if (value1 > value2) {
     console.log("Value1 " + value1 + " is greater than Value2 " + value2, )
 } else if (value1 == value2){
    console.log("Value1 " + value1 + " is equal to Value2 " + value2, )
 }else {
    console.log("Value2 " + value2 + " is greater than Value1 " + value1, )
 };

 //! SWITCH = is a change. It's better when you have multuple ELSE IF
 var day = "Wednesday";
 switch (day) {
    case "Saturday":
        console.log("Today is Saturday");         
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    case "Monday": 
        console.log("Today is Monday");
        break;
    case "Tuesday": 
        console.log("Today is Tuesday");
        break;
    case "Wednesday": 
        console.log("Today is Wednesday");
        break;
    case "Thursday": 
        console.log("Today is Thursday");
        break;
    case "Friday": 
        console.log("Today is Friday");
        break; 
    default: 
        console.log("It's not a day")
         break;
 }