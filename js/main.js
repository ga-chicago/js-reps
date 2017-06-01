//round 1
var words = ["hello", "what", "is", "up", "dude"];
var array = [];

var lengths = function (arrayOfStrings){

	for (var i = 0; i < arrayOfStrings.length; i++ ) {

		var answer = arrayOfStrings[i].length;
		array.push(answer)
	}
	
}
	lengths (words);

//round 2