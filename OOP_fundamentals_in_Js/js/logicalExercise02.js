/*
 ? CASE 2. HORSES. 

	? Mac's horse is darker than Smith's, but faster and older than Jack's, which is even slower than Willy's, which is younger than Mac's, which is older than Smith's, which is lighter than Willy's, although Jack's is slower and darker than Smith's. Which is the older, which is the slower and which is lighter? 

		*|  (2) more older  |   (2) more faster    |  (2) more darker
		*|  (1) less older  |   (1) less faster    |  (1) less darker	 
		*|                  |                      |
* Mac 	*| age: older   (2) | velocity: faster (2) | tone: darker  (2)
* Smith	*| age: younger (1) | velocity: faster (2) | tone: lighter (1)
* Jack	*| age: younger (1) | velocity: slower (1) | tone: darker  (2)
* Willy	*| age: younger (1) | velocity: faster (2) | tone: darker  (2)
 
*/

 var horses = {

 	Mac: {age:0, velocity:0, tone:0 },
 	Smith: {age:0, velocity:0, tone:0 },
 	Jack: {age:0, velocity:0, tone:0 },
 	Willy: {age:0, velocity:0, tone:0 },
 	result: function(){

 		if(horses.Mac.tone > horses.Smith.tone &&
 		   horses.Mac.velocity > horses.Jack.velocity &&
 		   horses.Mac.age > horses.Jack.age &&
 		   horses.Willy.velocity > horses.Jack.velocity &&
 		   horses.Mac.age > horses.Willy.age &&
 		   horses.Mac.age > horses.Smith.age &&
 		   horses.Willy.tone > horses.Smith.tone &&
 		   horses.Smith.velocity > horses.Jack.velocity &&
 		   horses.Jack.tone > horses.Smith.tone
 		   ){

 			return true;
 		}

 		return false;

	 },
	 
 	interval: setInterval(function(){

		// *2 is because the number 2 can help us to identify what is more in every case
 		horses.Mac.age = Math.ceil(Math.random()*2);
 		horses.Mac.velocity = Math.ceil(Math.random()*2);
 		horses.Mac.tone = Math.ceil(Math.random()*2);

 		horses.Smith.age = Math.ceil(Math.random()*2);
 		horses.Smith.velocity = Math.ceil(Math.random()*2);
 		horses.Smith.tone = Math.ceil(Math.random()*2);

 		horses.Jack.age = Math.ceil(Math.random()*2);
 		horses.Jack.velocity = Math.ceil(Math.random()*2);
 		horses.Jack.tone = Math.ceil(Math.random()*2);

 		horses.Willy.age = Math.ceil(Math.random()*2);
 		horses.Willy.velocity = Math.ceil(Math.random()*2);
 		horses.Willy.tone = Math.ceil(Math.random()*2);

 		if(horses.result()){

 			clearInterval(horses.interval);
 			console.log("Mac's horse", horses.Mac);
 			console.log("Smith's horse", horses.Smith);
 			console.log("Jack's horse", horses.Jack);
 			console.log("Willy's horse", horses.Willy);

 		};

 	},1)

 };

 
