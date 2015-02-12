/*
Make the following code work.

var counter = getCounter();
counter (); //2
counter (); //4
counter (); //6
counter (); //8
counter (); //10
*/

var getCounter = function () {
	var counter = 0;
	return function () {
		counter += 2;
		return counter;
	}
}

var counter = getCounter();