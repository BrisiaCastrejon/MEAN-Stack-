/*
*LOOPS are a estructures to iterate data
*/

// ! FOR
for (let i = 0; i < 5; i++) {
   
    console.log("i" + i);
};

for (let i = 0; i <= 5; i++) {
   
    console.log("i" + i);
};

for (let i = 1; i <= 5; i++) {
   
    console.log("i" + i);
};

 // ? EXAMPLE
 
 var boxes = document.querySelectorAll('.boxes');
 console.log(boxes);

 for (var i = 0; i < boxes.length; i++) {

    boxes[i].style.width = "50px";
    boxes[i].style.height = "50px";
    boxes[i].style.background = "black";
    boxes[i].style.marginTop = "5px";
     
 }


// ! WHILE
var number = 1;

while (number <= 5) {
    console.log("number: ", number)
    number++;
    console.log("number with increment: ", number)

};

// ! DO WHILE
var j = 1;

do{
    console.log("j: ", j)
    j++;
    console.log("j with increment: ", j)
}while (j <= 5);

