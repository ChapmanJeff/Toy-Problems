/*
Write a function that accepts a number, n, and returns the nth Fibonacci number. Use a recursive solution to this problem; if you finish with time let over, implement an iterative solution.
*/

var nthFibonacci = function (num) {
	var a = [0,1];
	var b;
	for (var i = 2; i <= 100; i++) {
		b = a[i-2] + a[i-1];
		a.push(b);
	}
	return a[num];
}

nthFibonacci(5);

//Or the recursive way:

function fib(num) {
  if (num <= 2) {			//base case
    	return 1;
  }									//need to return the original function in a way that eventually gets down to the base case. 
  return fib(num-1) + fib(num-2);		//how will i get closer to my base case.
}

fib(6);