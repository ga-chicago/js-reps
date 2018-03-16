const words = ["hello", "what", "is", "up", "dude"];

const length = function(arrayOfStrings){
	const strLength = [];
	for (let i = 0; i < arrayOfStrings.length; i++){
		strLength.push(arrayOfStrings[i].length)
	}
	return strLength
}

length(words);