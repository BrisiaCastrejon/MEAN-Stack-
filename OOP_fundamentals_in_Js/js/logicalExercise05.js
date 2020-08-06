/*
	! CASE 5. SILENCE. 
		! If Angela speaks lower than Rosa and Celia speaks higher than Rosa. Does Angela speak higher or lower than Celia?
 */
 var volume = {

 	Angela:0,
 	Rosa:0,
 	Celia:0,

 	result: function(){

 		if(volume.Angela < volume.Rosa &&
 		   volume.Celia > volume.Rosa){

 			return true;
 		}

 		return false;

 	},

 	interval: setInterval(function(){

 		volume.Angela = Math.ceil(Math.random()*3);
 		volume.Rosa = Math.ceil(Math.random()*3);
 		volume.Celia = Math.ceil(Math.random()*3);

 		if(volume.result()){

 			clearInterval(volume.interval);
 			console.log("Angela", volume.Angela);
 			console.log("Rosa", volume.Rosa);
 			console.log("Celia", volume.Celia);

 		}

 	},1)

 }



