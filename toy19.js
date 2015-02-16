/*
Create a function that takes a string with parens, brackets, braces ({[< and checks to see if they close >]})
(string{stringy}) // true  ([string]} // false
*/

var check = function (str) {
	var opParen = 0;
	var clParen = 0;
	var opSquig = 0;
	var clSquig = 0;
	var opBrack = 0;
	var clBrack = 0;
	var opHat = 0;
	var clHat = 0;
	for (var i = 0; i < str.length; i ++) {
		if (str[i] === '(') {
			opParen += 1;
		}
		if (str[i] === ')') {
			clParen += 1;
		}
		if (str[i] === '{') {
			opSquig += 1;
		}
		if (str[i] === '}') {
			clSquig += 1;
		}
		if (str[i] === '[') {
			opBrack += 1;
		}
		if (str[i] === ']') {
			clBrack += 1;
		}
		if (str[i] === '<') {
			opHat += 1;
		}
		if (str[i] === '>') {
			clHat += 1;
		}
	}
	if (opParen === clParen && opSquig === clSquig && opBrack === clBrack && opHat === clHat) {
			return true;
		} else {
			return false;
		}
}

check('string{stringy}');

check('([string]}');

	//Check for order as well - Camden

var checkString = function(str){
    var leftbrackets = ['(', '{', '<', '['];
    var rightbrackets = [')', '}', '>', ']'];
    var rightvalues = {
        ')': '(',
        '}': '{',
        '>': '<',
        ']': '['
    };
    var stack = [];

    for(var i = 0; i < str.length; i++){
        if(leftbrackets.indexOf(str[i]) !== -1){
            stack.push(str[i]);
        }
        if(rightbrackets.indexOf(str[i]) !== -1){
            if(stack[stack.length-1] === rightvalues[str[i]]){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return (stack.length === 0) ? true :  false;
};

// Dan's solution:
function openClose(string){
    var obj = {
        "()": 0,
        "<>": 0,
        "[]": 0,
        "{}": 0
    };
    var innerList = [];
    for( var i = 0; i < string.length; i++ ) {
        for(var item in obj){
            if(item.indexOf(string[i]) === 0){
                innerList.push(string[i]);
                obj[item] += 1;
            } else if (item.indexOf(string[i]) === 1){
                obj[item] -= 1;
                if(obj[item] < 0){
                    return false;
                }
                if(item.indexOf(innerList[innerList.length -1 ]) === -1){
                    return false
                } else {
                    innerList.pop();
                }
            }
        }
    }
    if(innerList.length) return false;
    return true;
}
