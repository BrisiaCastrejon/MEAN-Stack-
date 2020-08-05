/*
* SET INTERVAL = Time interval. It executes every time
    * => Syntaxis 
        !setInterval(function, time)
        !1000 = 1 second 
*/

var time = document.getElementById('time');
var seconds = 0;

/* setInterval(() => {
    seconds++;
    time.innerHTML = seconds;
    // time.innerHTML += seconds;
    // console.log("second", seconds)
}, 1000); */ 

/*
* SET TIMEOUT = Time delay. It executes after time
    * => Syntaxis
        !setTimeout(function, time)
        !5000 = 5 seconds
 */

 setTimeout(() => {
     alert('time over');
 }, 25000);

// * A way to stops the Interval 

 var interval = setInterval(() => {
    seconds++;
    time.innerHTML = seconds;
}, 1000);

setTimeout(() => {
    clearInterval(interval)
}, 5000);
