/*
	! CASE 4. SIX FRIENDS ON VACATION. 
		! Six friends want to spend their holidays together and decide, every two people, to use different means of transport; we know that Alejandro does not use the car as it accompanies Benito who is not going by plane. Andrés travels by plane. If Carlos is not accompanied by Dario, he does not use the plane. What kind of transport does Tómas use to reach his destination?
*/

 var transports = {

 	plane:1,
 	car:2,
 	other:3,
	
 	alejandro:{transport:0},
 	benito:{transport:0},
 	andres:{transport:0},
 	carlos:{transport:0},
 	dario:{transport:0},
 	tomas:{transport:0},
	
 	result: function(){

 		if(transports.alejandro.transport != transports.car && 
 		   transports.alejandro.transport == transports.benito.transport && 
 		   transports.benito.transport != transports.plane &&

 		   transports.andres.transport == transports.plane &&

 		   transports.carlos.transport != transports.dario.transport &&
 		   transports.carlos.transport != transports.plane &&
 		   transports.carlos.transport == transports.car &&

 		   transports.andres.transport == transports.dario.transport &&  
 		   transports.carlos.transport == transports.tomas.transport
 		   ){

 			return true;
 		}

 		return false;

 	},

 	interval: setInterval(function(){
		
 		transports.alejandro.transport = Math.ceil(Math.random()*3);
 		transports.benito.transport = Math.ceil(Math.random()*3);
 		transports.andres.transport = Math.ceil(Math.random()*3);
 		transports.carlos.transport = Math.ceil(Math.random()*3);
 		transports.dario.transport = Math.ceil(Math.random()*3);
 		transports.tomas.transport = Math.ceil(Math.random()*3);
		
		
 		if(transports.result()){

 			clearInterval(transports.interval);
			
 			if(transports.tomas.transport == 1){

 				console.log("Tomas travels in avión");
			
 			}else if(transports.tomas.transport == 2){

 				console.log("Tomas travels in car");

 			}else{

 				console.log("Tomas travels in other transporte");

 			};

 		}

 	},1)


 }