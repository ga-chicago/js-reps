



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





// ROUND 3

const toonify = function(accent, sentence){
	if (accent === "daffy") {
		return sentence.replace(/s/g, "th")
	} else if (accent === "elmer") {
		return sentence.replace(/r/g, "w")
	} else {
		return sentence
	}
}
toonify("daffy", "so you smell like sausage")





// ROUND 4
// SKIP




// ROUND 5

const letterReverse = function(str){
	// Split string
	let arrStr = str.split("");
	// console.log(arrStr);
	
	// Reverse
	let revStr = arrStr.reverse();
	// console.log(revStr)
	
	// join
	return revStr.join("")
	
}
letterReverse("Now I know what a TV dinner feels like");

letterReverse("Put Hans back on the line")





// Round 6

// let str1 = ["oh", "good", "grief"];

// const longest = function(str){
// 	for(let i = 0; i < str.length; i++){
// 		if(str[i].length > str[i+1].length)
// 	}
// // }




