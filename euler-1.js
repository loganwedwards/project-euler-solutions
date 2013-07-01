/*
 * Author:  	Logan Edwards
 * Revision:	2013-07-01
 * Problem:		1
 * Description:	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 * */
 
 // Initialize the sum var
var sum = 0;

// Loop to run through natural nums < 1000
for (var i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
			
			// Increase the sum when the condition is met
			sum += i;
	}
}
	
console.log("The sum is " + sum);
