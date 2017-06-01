// ROUND 1

var arrayOfLen = [];

function lengths(arrayOfStrings) {
	for (var i = 0; i < arrayOfStrings.length; i++) {
		var str = arrayOfStrings[i];
		var strLen = str.length;
		arrayOfLen[i] = strLen;
	}
	console.log(arrayOfStrings);
	return arrayOfLen;
}

var words = ["hello", "what", "is", "up", "dude"]
lengths(words)  // [5, 4, 2, 2, 4]


// ROUND 2

function transmogrifier(num1, num2, num3) {
	return Math.pow(num1*num2, num3);
}

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)


// ROUND 3

function toonify(accent, sentence) {
	if (accent === "daffy") {
		var letterArr = sentence.split("");
		for (var i = 0; i < letterArr.length; i++) {
			if (letterArr[i] === "s") {
				letterArr[i] = "th";
			}
		}
		var newSen = letterArr.join("");
		return newSen;
	}

	else if (accent === "elmer") {
		var letterArr = sentence.split("");
		for (var i = 0; i < letterArr.length; i++) {
			if (letterArr[i] === "r") {
				letterArr[i] = "w";
			}
		}
		var newSen = letterArr.join("");
		return newSen;
	}

	else {
		return sentence;
	}
}

toonify("daffy", "so you smell like sausage")
// "tho you thmell like thauthage"



// ROUND 4

function wordReverse(str) {
	return str.split(" ").reverse().join(" ")
}

wordReverse("Now I know what a TV dinner feels like")
//"like feels dinner TV a what know I Now"


// ROUND 5

function letterReverse(str) {
	var strArr = str.split(" ");
	var backwardsArr = [];
	for (var i = 0; i < strArr.length; i++) {
		var backwards = strArr[i].split("").reverse().join("");
		backwardsArr[i] = backwards;
	}
	var backwardsStr = backwardsArr.join(" ")
	return backwardsStr;
}

letterReverse("Now I know what a TV dinner feels like")
// "woN I wonk tahw a VT rennid sleef ekil"

letterReverse("Put Hans back on the line")
//"tuP snaH kcab no eht enil"


// ROUND 6

function longest(arrayOfStrings) {
	var sortedArr = arrayOfStrings.sort(function(a, b) {return b.length - a.length});
	return sortedArr[0];
}

longest(["oh", "good", "grief"]) // "grief"
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
// "unrequited"


// FINAL ROUND

function repMaster(input, funct) {
	console.log(funct(input) + " proves that I am the rep MASTER!");
}



