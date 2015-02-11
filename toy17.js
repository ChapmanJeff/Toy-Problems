//Create a function that can only be invoked once

//Katia's way:
var string = 'Hello';
var once = function (str) {
	var executed = false;
	return function () {
		if(!executed) {
			console.log(str);
			executed = true;
		}
	}
}

var myFunc = once(string);

//Jason's way:
var once = function(num1, num2) {
	if (!once.invoked) {
		once.invoked = true;
		return num1 + num2;
	}
}

// Jacob's Way:
var functionCreator = function(fn, n) {
	var counter = 0;
	return function() {
		if (counter < n) {
			fn.apply(this, arguments);
			counter++;
		}
	}
}

var myFunc = function(function(one,two) {
	console.log(one + two);
}//then something else)