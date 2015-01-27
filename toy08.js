//Given an arbitrary input string, return the first non-repeated character in the string. For example:
// firstNonRepeatedCharacter('ABA'); --> 'B'
// firstNonRepeatedCharacter('AABCABD') --> 'C'

var nonRepeat = function (str) {
	var a = [];
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < str.length; j++) {
			if (!str.indexOf(str[i])) {
				a.push(str[i]);
			} else { 
				return str[i];
			}									//THis is on the right track
		}
	}
}

nonRepeat('AABCABD');


var one1 = function (str) {
	str = str.toUpperCase();
	counter = [];
	for (var i =0; i <str.length; i++) {
		if (counter[str[i]]) {
			counter[str[i]] = 'duplicate';
		} else {
			counter[str[i]] = 'not repeated';
		}
	}
	for (var j = 0; j < str.length; j ++) {
		if (counter[str[j]] === 'not repeated') {
			return str[j];
		}
	}
	return 'all are repeated';
}


var two2 = function (str) {
	for (var i = 0; i < str.length; i++) {
		var re = new RegExp(str.length; i++) {
			if (str.match(re).length === 1) {
				return str[i];
			}
		}
		return null;
	}

