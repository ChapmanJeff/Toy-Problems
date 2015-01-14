// Make the function invokation work:

//Answer:

// var sum = function(array, cb) {
// 	var total = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		total += array[i];
// 	}
// 	cb(total);
// }

//Alt. Answer:


//Given:

sum([1,4,3,5,2,8], function(total){
	console.log('The total sum of the array is ' + total);
});