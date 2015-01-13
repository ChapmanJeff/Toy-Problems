var nums = ["hello", "javascript", "awesome"]


var finder = function (string1, array1) {
	var exists;
	for (var i = 0; i < array1.length; i++) {
      if (array1[i] === string1) {
        exists = true;
    } 
  }
  if (!exists) {
    exists = false;
  }
  return exists;
};

//Or


var nums = ["hello", "javascript", "awesome"]

var finder = function (string1, array1) {
	for (var i = 0; i < array1.length; i++) {
      if (array1[i] === string1) {
        return true;
    } 
  }
  return false;
};