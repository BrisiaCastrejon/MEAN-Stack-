/*
 ! CASE 1. THE FOUR ATHLETES. 
	 ! Of four runners it is known that C has arrived immediately behind B, and D has arrived in the middle of A and C. Could you calculate the order of arrival?
		 ! Result: A:4, B:1, C:2, D:3
*/
var athletes = {

	A:0,
	B:0,
	C:0,
	D:0,

	result: function(){

		if( athletes.C > athletes.B && 
			athletes.D > athletes.B && 
			athletes.D > athletes.C && 
			athletes.D < athletes.A ){
			// because the conditional is true the value is true
			return true;
		}

		return false;

	},

	interval: setInterval(function(){

		// to get the random numbers
		athletes.A = Math.ceil(Math.random()*4);
		athletes.B = Math.ceil(Math.random()*4);
		athletes.C = Math.ceil(Math.random()*4);
		athletes.D = Math.ceil(Math.random()*4);

		//if(athletes.result() == true){} or
		if(athletes.result()){

			clearInterval(athletes.interval);
			console.log("athlete A", athletes.A);
			console.log("athlete B", athletes.B);
			console.log("athlete C", athletes.C);
			console.log("athlete D", athletes.D);

		}

	},10);

}