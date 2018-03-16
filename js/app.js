// ROUND 1
// return array of str.length for each string in the array
const lengths = (arrStr) => {
	// print original string array to the console
	// console.log(arrStr);
	// console.log(arrStr.length);
	// console.log(typeof(arrStr[2]));
	const arrNum = [];
	// iterate through string array push string lengths into new number array
	for (i = 0; i < arrStr.length; i++) {
		arrNum.push(arrStr[i].length);
	};
	return arrNum;
};
// check if function works
console.log(lengths(["the", "cat", "said", "hi"]));

// ROUND 2

const transmogrifier = (num1, num2, num3) => {
	return ((num1 * num2) ** num3);
};
console.log(transmogrifier(2, 2, 3));

// ROUND 3

const toonify = (accent, sentence) => {
	if (accent === "daffy") {
		// find all instances of s
		// save to variable re
		const re = /s/gi;
		// store replaced string to a variable
		const newString = sentence.replace(re, "th");
		// return new variable
		return (newString);
		// do the same thing for the second condition
	} else if (accent === "elmer") {
		const re = /r/gi;
		const newString = sentence.replace(re, "w");
		return (newString);
	} else {
		// condition for all other strings
		return ("accent not recognized");
	}
};
// check if all conditions work
console.log(toonify("daffy", "relax, sister"));
console.log(toonify("elmer", "rabbit season"));
console.log(toonify("bugs bunny", "what's up, doc?"));

// ROUND 4

const wordReverse = (str) => {
	// split strings and store to an array
	const strArr = str.split(" ");
	console.log(strArr);
	// reverse array, convert to string, store to variable
	const reverseStr = strArr.reverse().toString();
	// locate all commas generated from toString() method
	const re = /,/g;
	// replace commas with a single space
	const newString = reverseStr.replace(re, " ");
	return (newString);
};
console.log(wordReverse("the cat farted and it smelled"));

// ROUND 5

const letterReverse = (str) => {
	let newStr = "";
	// i must be str.length - 1 because I need to match the end index
	// similarly, i must end at 0, the first index in the string
	for (i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
};
console.log(letterReverse("what do you mean?"));

// ROUND 6

// 1. need to measure the length of each string, iterating through the array
// 2. then compare the length values, store them in an array
// 3. find the highest value in the array
// 3. return the string with the longest length
const longest = (arrStr) => {
	const len = [];
	// populates length array with length of each string
	for (i = 0; i < arrStr.length; i++) {
		len.push(arrStr[i].length);
	}
	console.log(len); // <-- works.
	for (i = 0; i < arrStr.length; i++) {
		/// Math.max() method needs ... if an array is the argument and not an array literal
		if (arrStr[i].length === Math.max(...len)) { // need to put highest length in len
			return arrStr[i];
		}
	}
};

console.log(longest(["Hi,", "my", "name", "is", "Henry", "."]));

// FINAL ROUND
// make the function argument call the str in the repMaster function:

const repMaster = (str, func) => {
	return (func (str));
};

console.log(repMaster("Eat my shorts", letterReverse));