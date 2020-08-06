/*
 ! CASE 3. THE FOUR DOGS. 
	 ! We have four dogs: a greyhound, a dogo, a alano and a podenco. The latter eats more than the greyhound; the alano eats more than the greyhound and less than the dogo, but the latter eats more than the podenco. Which of the four dogs eats less?

	 * 1 ==> eat less			
	 * Greyhound	| toEat: 1   |
	 * Dogo			| toEat: 4   |
	 * Alano		| toEat: 2   |   
	 * Pondeco 		| toEat: 3   |

*/

 var dogs = {

 greyhound:0,
 dogo:0,
 alano:0,
 podenco:0,
 result: function(){

 if(dogs.podenco > dogs.greyhound &&
    dogs.alano > dogs.greyhound &&
    dogs.alano < dogs.dogo &&
    dogs.dogo > dogs.podenco){

 return true;
 }

 return false;

 },
 interval: setInterval(function(){

 	dogs.greyhound = Math.ceil(Math.random()*4)
 	dogs.dogo = Math.ceil(Math.random()*4)
 	dogs.alano = Math.ceil(Math.random()*4)
 	dogs.podenco = Math.ceil(Math.random()*4)

 	if(dogs.result()){

 		clearInterval(dogs.interval);
 		console.log("Greyhound", dogs.greyhound)
 		console.log("Dogo", dogs.dogo)
 		console.log("Alano", dogs.alano)
 		console.log("Podenco", dogs.podenco)

 		if(dogs.greyhound == 1){

 			console.log("Breed that eats the least is Greyhound");

 		}else if(dogs.dogo == 1){

 			console.log("Breed that eats the least is Dogo");

 		}else if(dogs.alano == 1){

 			console.log("Breed that eats the least is Alano");

 		}else{

 			console.log("Breed that eats the least is Podenco");

 		}

 	}

 },10)

};