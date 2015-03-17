//Write a function that console.logs numbers from 1 to 100. 
//But for multiples of 3, print 'fizz', 
//For multiples of 5, print 'buzz',
//and for multiples of both 3 and 5, print 'fizz buzz'.

//ex: 1, 2, fizz, 4, buzz etc

var log = function () {
	var str = '';
	for (var i = 1; i < 101; i ++) {
		if (i % 15 === 0) {
			str += ', fizzbuzz';
		}
		else if (i % 3 === 0) {
			str += ', fizz';
		}
		else if (i % 5 === 0) {
			str += ', buzz';
		}
		else {
			str += ', ' + i;
		}
	}
	console.log(str)
}

log()