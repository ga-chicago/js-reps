// Round 1

function lengths(arrayOfStrings) {
	var theirLengths = [];
	for (var i = 0; i < arrayOfStrings.length; i++) {
		theirLengths.push(arrayOfStrings[i].length);
	}
	return theirLengths;
};



// Round 2

var transmogrifier = function(a,b,c) {
	return Math.pow((a * b), c);
};



// Round 3

var sampleSentence = "so you smell like sausage";
var sampleSentence2 = "really great, randy!";

var toonify = function(accent,sentence) {
	var newSentence
	if (accent === "daffy") {
		newSentence = sentence.replace(/s/g,"th");
	} else if (accent === "elmer") {
		newSentence = sentence.replace(/r/g,"w");
	} else {
		newSentence = sentence;
	};
	return newSentence;
};



// Round 4

var wordReverse = function(string) {
	var splitUpString = string.split(" ").reverse();
	var newString = "";
	for (var i = 0; i < splitUpString.length; i++) {
		if (i < splitUpString.length - 1) {
			newString += splitUpString[i] + " ";
		} else {
			newString += splitUpString[i];
		}
	}
	return newString;
};



// Round 5

var letterReverse = function(string) {
	var splitUpString = string.split(" ");
	var newStrings = [];
	for (var i = 0; i < splitUpString.length; i++) {
		var backwardsWord = splitUpString[i].split("").reverse();
		var backTogether = backwardsWord.join("");
		newStrings.push(backTogether);
	};
	return newStrings.join(" ");
};



// Round 6

var longest = function(array) {
	var longestWord = "";
	for (var i = 0; i < array.length; i++) {
		if (array[i].length > longestWord.length) {
			longestWord = array[i];
		} else { }
	};
	return longestWord;
};



// Final Round

var repMaster = function(string,functionName) {
	return functionName(string) + " proves that I am the rep MASTER!";
};


