



// ROUND 1

const words = ["hello", "what", "is", "up", "dude"];

const length = function(arrayOfStrings){
	const strLength = [];
	for (let i = 0; i < arrayOfStrings.length; i++){
		strLength.push(arrayOfStrings[i].length)
	}
	return strLength
}

length(words);






// ROUND 2

const transmogrifier = function(num1, num2, num3){
	return Math.pow((num1 * num2), num3);
}
transmogrifier(5, 4, 3);
transmogrifier(12, 12, 6);
transmogrifier(42, 13, 7);