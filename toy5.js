/* 
Write a function called reverse that takes in a string and returns the string reversed. *Do not us reverse() method on the Arrays prototype.
*/

var reverse = function (string) {
	var a = string;
	var b = a.length - 1;
	var newWord = '';
	for (i = b; i >= 0; i--) {
		if (b !== 0) {
			newWord = newWord + a[i];
		}
	}
	return newWord;
};

reverse("I love to make Strings");


//Or;

function reverse (str) {
	var o = "";
	for(var i = str.length - 1; i >= 0; i--) {
		o += o[i];
	}
	return o;
}

reverse("I love to make Strings");