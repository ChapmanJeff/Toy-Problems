/*
Write a function called simpleSymbols that taks in a string parameter and determines if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie ++d+====+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
*/
var simpleSymbol = function (str) {
	var result;
	for (var i = 0; i < str.length; i++) {
		if (!str.charAt(i) {
			result = false;
		} 
		if (str.charAt(i) = /^[a-zA-Z]/ && str.charAt(i - 1) === "+" && str.charAt(i + 1) === "+") {
			result = true;
		}
	}	
	return result
}

simpleSymbol("++d+====+c++==a");

var simpleSymbol = function (str) {
	var result;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === /^[a-zA-Z]/) {
			return result = true;
		}
	}
	// return result;
}

simpleSymbol("++d+====+c++==a");

var simpleSymbols = function (str) {
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) !== '+' && str.charAt(i) !== '=')
	}
}



var simpleSymbol = function (str) {
	var letters = 'abcdefghijklmnopqrstuvwxyz';
	var hash = {};
	for (var i = 0; i < letters.length; i++) {
		hash[letters[i] = true];
	}
	for (var i = 0; i < letters.length; i++) {
		if(hash[stri[i]] && (str[i-1] !== ""))
