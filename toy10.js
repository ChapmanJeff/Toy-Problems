/*
Write a function that generates an array of integers of the Fibinacci sequence, up to i = 100. The Fibonacci sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers in the sequence are 0 and 1. Write a function to check if a given number is in the Fiabinacci sequence, return yes if it is, if not return the string "no".
*/

var func1 = function (num) {
	var a = [0,1];
	var b;
	for (var i = 2; i <= 100; i++) {
		b = a[i-2] + a[i-1];
		a.push(b);
	}
	if (a.indexOf(num) ===  -1) {
		return "no";
	} else {
		return "yes";
	}
}

func1(3);