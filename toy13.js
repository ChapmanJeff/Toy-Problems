/*
Create a function that taks in three strings as parameters. The goal is to swap all x characters in the string for y characters. For example:

swapper('some string', 's', 'z') // returns 'zome string';
*/

var swapper = function (str, x, y) {
	var strArr = str.split('');
	for (var i = 0; i < strArr.length; i++) {
		if (strArr[i] === x) {
			strArr[i] = y;
		}
	}
	var string = strArr.join('');
	return string;
}

swapper('football fables are fun', 'f', 's');

swapper('some string', 's', 'z');


// Using Recursion:

var swapRecur = function (str, orig, repl) {
	if (str.length = 0) return '';
	if(str[0] === orig) str = repl + str.slice(1);
	return str[0] + replace(str.slice(1), orig, repl);
}

swapRecur('some string', 's', 'z')