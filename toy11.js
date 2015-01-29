/*
Find the only item that occurs an even number of times in an array. If there is more than noe item that occurs an even number of times, just return one of them. IF there are no items that occur an even number of times, return null.
  var onlyEven = evenOccurence([1,6,2,4,4,5,6,8,9,6]);
  console.log(onlyEven); // 4

  var onlyEven = evenOccurence([1,1,3,4,1]);
  console.log(onlyEven); // null
*/

//Solution:

var evenOccurence = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		var occur = 0;
			for (var j = 0; j < arr.length; j++) {
				if(arr[i] === arr[j]) {
					occur++;
				}
			}
			if(occur % 2 === 0) {
				return (arr[i])
			}
	}
}

evenOccurence([1,6,2,4,4,5,6,8,9,6])

//Or: (there is a syntax error in this somewhere)

var evener = function (arr) {
	var track = {};
	for (var i = 0; i < arr.length; i++) {
		if(!track[arr[i]]) 
			track[arr[i]] = 0;
		}
		track[arr[i]] += 1;
	}
	for (var key in track) {
		if (!(track[key] % 2)) {
			return [key];
		}
	}
}

//Trackers:

var deleter = function(arr) {
	var track = {};
	for (var i = 0; i < arr.length; i++) {
		if(track[arr[i]]) {
			arr.splice(i,1);
		}
		else {
		track[arr[i]] = true;
		}
	}
}