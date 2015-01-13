/*Write a function called combinator that is given two arrays as arguments. The first array is an array
of first names and the second is an array of last names. Have the function return a new array combining 
the first names and last names. 

combinator (['tyler', 'ean', 'cahlan'], ['mcginnis', 'platter', 'sharp']) --> 
											['tyler mcginnis', 'ean platter', 'cahalan sharp']; */

var fNames = ['Tyler', 'Ean', 'Cahlan'];
var lNames = ['Mcginnis', 'Platter', 'Sharp']

var combinator = function (array1, array2) {
	var comboName = [];
	for (var i = 0; i < array1.length; i++) {
		comboName.push(array1[i] + " " + array2[i]);
	}
	return comboName;
};

var named = combinator(fNames, lNames);