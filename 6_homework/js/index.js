//Hi :)



// var rNum = Math.ceil(Math.random()*2)+1;
 /*
var guessN = function() {
	var tellMe = prompt('Pick a degree type: fahrenheit or celsius');
}
console.log(guessN());
*/

// ----------------------------------------------------------------------------------
var temperature =132;

function convertDegrees(celsius) {
	if(temperature == celsius) {
		var celsius = Math.floor(((temperature*1.8)+32));
		console.log("Degrees in Celsius: " + celsius);
		return true, celsius;
	}
	else if(temperature == fahrenheit) {
		var fahrenheit = Math.floor((temperature-32)*(5/9));
		console.log("Degrees in Fahrenheit: " + fahrenheit);
		return true, fahrenheit; 
	}
	else {
		console.log("Please use either fahrenheit or celsius!");
		return false;
} 
}
convertDegrees(temperature);