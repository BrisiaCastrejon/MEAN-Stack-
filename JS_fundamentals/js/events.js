/*
* EVENTS IN JS = ACTIONS WHEN THE USER INTERACT WITH THE PAGE
* 2 kinds of events; from DOM and from JS
 */

var boxes = document.querySelectorAll('.boxes');


for (var i = 0; i < boxes.length; i++) {

   boxes[i].style.width = "50px";
   boxes[i].style.height = "50px";
   boxes[i].style.background = "black";
   boxes[i].style.marginTop = "5px";  
   boxes[i].style.marginRight = "5px"; 
   boxes[i].style.display = "inline-block";
   // * boxes[i].style.float = "left";  => they don't part of nodes 
};

// ! Event from DOM
var aBox = document.getElementById('aBox');

function changeColor() {
    aBox.style.background = "red"
};

//! Event from JS
var btn = document.getElementById('btn');

btn.addEventListener('click', changeBox);

function changeBox() {
    aBox.style.width = "500px"
    aBox.style.transition = "1s width ease"
};
