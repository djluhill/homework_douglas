
// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

// Follow the steps below.

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.



// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.



// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.



// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.


console.log("hi mom");


// var gnum = [1,2,3,4,5,6,7,15];

	var num1 = 3;
	var num2 = 5;

for(var num = i = 0; i <= 5; i++) { //b

//	var num = gnum[i];

		if( num % num1 == 0 && num % num2 == 0) { //c
			console.log("fizzbuzz");
		} //c
		else if ( num % num2 == 0 ) { //d
			console.log("buzz");
		} //d
		else if ( num % num1 == 0) {
			console.log("fizz");
		}
		else {
			console.log("try again");
		}
	} //b


/*
var gnum = [1,2,3,4,5,6,7,15];

	var num1 = 3;
	var num2 = 5;

for(i = 0; i < gnum.length; i++) { //b

	var num = gnum[i];

		if( num % num1 == 0 && num % num2 == 0) { //c
			console.log("fizzbuzz");
		} //c
		else if ( num % num2 == 0 ) { //d
			console.log("buzz");
		} //d
		else if ( num % num1 == 0) {
			console.log("fizz");
		}
		else {
			console.log("try again");
		}
	} //b
*/

