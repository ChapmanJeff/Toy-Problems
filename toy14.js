/*
Write a functiin that accepts a multi dimensional array and returns a flattened version.
//flatten([1,2,[3,[4],5,6],7])  // [1,2,3,4,5,6,7]
*/


//Recursion:
var flatten = function(arr, newArr) {
	if (!newArr) newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) flatten(arr[i], newArr);
		else newArr.push(arr[i]);
	}
	return newArr;
}

flatten([1,2,[3,[4],5,6],7]);

//Aden Solution
var flatten = function(arr) {
	var newString = arr.toString();
	var newArr = [];
	for (var i = 0; i< newString.length; i++) {
		if (newString[i] !== ',') {
			newArr.push(parseInt(newString[i]));
		}
	}
	return newArr;
}

flatten([1,2,[3,[4],5,6],7])


//Crazy way Cam came up with:
var flatten = function(arr) {
	var str = arr.join('[');
	var newArr = [];
	for (var i = 0; i < str.length; i++) {
		if(str[i] !== '[' && str[i] !== ",") {
			newArr.push(+str[i]);
		}
	}
	return newArr;
}

flatten([1,2,[3,[4],5,6],7])