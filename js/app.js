// Round 1

const lengths = (arrOfStrings) => {
	//return the lengths of strings in the array
	const arrOfLengths = [];
	for (i = 0; i < arrOfStrings.length; i++) {
		arrOfLengths.push(arrOfStrings[i].length)
	}
	return arrOfLengths;
}

arrOfStrings = ["This", "is", "my", "array", "of", "strings"]

// Round 2

const transmogrifier = (a,b,c) => {
	return ((a*b)**c)
}

transmogrifier(5,4,3) // 8000
transmogrifier(13,12,5) // 92389579776
transmogrifier(42,13,7) // 14466001271480793000

// Round 3

const toonify = (accent, sentence) => {
	if (accent === 'daffy') {
		return sentence.replace(/s/g, 'th')
	} else if (accent === 'elmer') {
		return sentence.replace(/r/g, 'w')
	} else {
		return sentence
	}
}

// Round 4

const wordReverse = (str) => {
	let splitStr = str.split(" ")
	let reverseString = splitStr.reverse()
	return reverseString.join(" ")
}

// Round 5

const letterReverse = (str) => {
	let splitStr = str.split("")
	let reverseString = splitStr.reverse()
	return reverseString.join("")
}

// Round 6

const longest = (arrOfStrings) => {
	//return the longest value in an array
	let lgth = 0;
	let longestString = "";

	for (let i = 0; i < arrOfStrings.length; i++) {
		if(arrOfStrings[i].length > lgth) {
			lgth = arrOfStrings[i].length;
			longestString = arrOfStrings[i]
		}
		
	} return longestString
}

arrOfStrings2 = ['This', 'is', 'my', 'newest', 'array', 'of', 'strings', 'supercalifragelisticexpialedocious']



// Final Round

const func = (str) => {
	return str.toUpperCase();
}

const repMaster = (input, func) => {
	return func(input) + " proves that I am the rep MASTER!"

} 
