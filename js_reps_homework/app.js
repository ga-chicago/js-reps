//round 1
//function should return an array of numbers
//each number in the array should be the length of the corresponding string
//you need to loop through each string in the array and get the length of each one. 
//final output is a different array with those lengths
const lengths = (arrayOfStrings) => {
	//need function to create a new array
	const arrOfLengths = [];
	//loop through the arrayOfStrings and push each 
	for(let i = 0; i < arrayOfStrings.length; i++) {
		arrOfLengths.push(arrayOfStrings[i].length)
	}
	return arrOfLengths;
}

let arrayOfStrings = ["hello", "what", "is", "up", "dude" ];


//round 2
const transmogrifier = (n1, n2, n3) => {
	newNum = n1 * n2;
	return Math.pow(newNum, n3)
}

transmogrifier(5, 4, 3) //<-- 8000
transmogrifier(13, 12, 5) //<-- 92389579776
transmogrifier(42, 13, 7) //<-- 14466001271480793000

//round 3
const toonify = (accent, sentence) => {
	//if accent is the string "daffy", return a sentence with s
	for(i = 0; i < accent.length; i++) {
		if(accent === "daffy") {
			return sentence.replace(/s/g, 'th')
		} else if (accent === "elmer") {
			return sentence.replace(/r/g, 'w')
		} else {
			return sentence
		}
	}
}

//round 5

const letterReverse = (string) => {
	// function splitString(input, separator) {
	let newString = string.split("");
	let reverseString = newString.reverse();
	return reverseString.join("")
}

letterReverse("Now I Know what a TV dinner feels like")

//round 6

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


//final round


const func = (str) => {
	return str.toUpperCase();
}

const repMaster = (input, func) => {
	return func(input) + " proves that I am the rep MASTER!"
	}
	
repMaster("look at this uppercase string!", func)