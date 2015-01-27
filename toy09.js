/* 
Write a function called ABCheck that takes a string parameter and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
*/

var ABCheck = function (str) {
	var check = false;
	for  (var i = 0; i < str.length) {
		if ((str[i] === "a" && str[i+3] === "b") || (str[i] === "b" && str[i+3] === "a")) {
			check = true;
		}
	}
	for (var i = str.length - 1; i >= 0; i--) {
		if ((str[i] === "a" && str[i-3] === "b") || (str[i] === "b" && str[i-3] === "a")) {
			check = true;
		}
	}
	return check;
};

ABCheck("lane borrowed");

//or


var ABCheck = function (str) {
	var r = str.toLowerCase().split('');
	for (var i = 0; i < r.length; i++) {
		if(arr[i] === "a" && (arr[i+4] === "b" || arr[i-4] === "b")) {
			return true;
		}
	}
	return false;
};

//Or 
var ABCheck = function (str) {
	var isAB = 'aAbB'.split

