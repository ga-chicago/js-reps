function lengths(strArr) {
	let numArr = [];
	for (let str in strArr) {
		numArr.push(strArr[str].length);
	}
	return numArr;
}

console.log(lengths(["grab","bag","number","1234"]));

function transmogrifier(num1, num2, num3) {
	return Math.pow(num1*num2,num3);
}

console.log(transmogrifier(5,3,2));

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

function letterReverse(str) {

	let strArr = str.split(" ");
	let revWord = "";
	let word = "";
	let lRevStr = "";

	for (let w in strArr) {
		word = strArr[w];
		revWord = "";
		for (let i = 0; i < word.length; i++) {
			revWord += word[word.length - i -1];
		}
		lRevStr += revWord + " ";
	}

	lRevStr = lRevStr.slice(0,lRevStr.length-1);

	return lRevStr;
}

console.log(letterReverse("Put Hans back on the line"));

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

function repMaster(input, fun) {
	return fun(input) + ' proves that I am the rep MASTER!';
}

function toUpperCase(str) {
	return str.toUpperCase();
}

console.log(repMaster("I finished this practice", letterReverse));
console.log(repMaster("I finished this practice", toUpperCase));
