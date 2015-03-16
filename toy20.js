//Triangle had n number of rows. Each row has one less block than the row below it. Create a function that takes ne and calculates the total number of blocks in the triangle.

// Ex: Triangle with 3 rows:

   *
  * *
 * * *

 // function return 6. BONUS: Create the triangle.

 var tri = function (rows) {
 	var total = 0;
 	var stars = '*';
 	for (var i = 0; i < rows + 1; i++) {
 		total += 1;
 		stars = stars.concat(' *')
 	}
 	return total;
 }



