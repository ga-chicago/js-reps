//Round 1
function lengths(strArr) {
	let numArr = [];
	for (let str in strArr) {
		numArr.push(strArr[str].length);
	}
	return numArr;
}

console.log(lengths(["grab","bag","number","1234"]));

//Round 2
function transmogrifier(num1, num2, num3) {
	return Math.pow(num1*num2,num3);
}

console.log(transmogrifier(5,3,2));

//Round 3
function toonify(accent, sentence) {
	if (accent === "daffy") {
		return sentence.replace(/s/g,"th");
	}
	if (accent === "elmer") {
		return sentence.replace(/r/g,"w");
	}
	return sentence;
}

console.log(toonify("daffy", "so you smell like sausage"));

//Round 3
function letterReverse(str) {

	let strArr = str.split(" ");
	let revWord = "";
	let word = "";
	let lRevStr = "";

	//loop through the array of words
	for (let w in strArr) {
		word = strArr[w];
		revWord = "";
		//loop backwords through each word and save each character to a reversed word
		for (let i = 0; i < word.length; i++) {
			revWord += word[word.length - i -1];
		}
		//add the reversed word to the return sentence
		lRevStr += revWord + " ";
	}

	//slice off the extra space at the end of the return sentence
	lRevStr = lRevStr.slice(0,lRevStr.length-1);

	return lRevStr;
}

console.log(letterReverse("Put Hans back on the line"));

//Round 4
function reverseWordOrder(str) {
	// Code from before I knew about str.split()

	// let wordArr = [];
	// let previ = 0;
	// for(i=str.indexOf(" "); i > 0; i = str.indexOf(" ",previ)) {
	// 	wordArr.push(str.slice(previ,i));
	// 	previ = i+1;
	// }
	// wordArr.push(str.slice(previ));

	let wordArr = str.split(" ");
	let revStr = ""
	for (let i = 1; i <= wordArr.length; i++) {
		revStr = revStr + " " + wordArr[wordArr.length - i];
	}
	revStr = revStr.slice(1,revStr.length);
	return revStr;
}

console.log(reverseWordOrder("Hi I'm Ben"));

//Round 5
function longest(strArr) {
	let maxLength = 0;
	let maxWord = "";
	for (let s in strArr) {
		if (strArr[s].length > maxLength) {
			maxLength = strArr[s].length;
			maxWord = strArr[s];
		}
	}
	return maxWord;
}

console.log(longest(["oh", "good", "grief"]));
console.log(longest(["oh", "griof", "grief"]));

//Final Round
function repMaster(input, fun) {
	return fun(input) + ' proves that I am the rep MASTER!';
}

function toUpperCase(str) {
	return str.toUpperCase();
}

console.log(repMaster("I finished this practice", letterReverse));
console.log(repMaster("I finished this practice", toUpperCase));
