
//Round 1//

var words = ["hello", "what", "is", "up", "dude"]
// lengths(words)  # => [5, 4, 2, 2, 4]
// var count = [];

function lengths(arrayOfStrings) {
	var count = [];
	for(i = 0; i < arrayOfStrings.length; i++){
		var character = arrayOfStrings[i].length;
		count.push(character);
	}
	return count;
};


//Round 2//

function transmogrifier(numA, numB, numC){
	var base = numA*numB;
	return Math.pow(base, numC);
}


//Round 3//

function toonify(accent, sentence){
	if( accent == 'elmer'){
		return sentence.replace('r', 'w');
	}
	else if( accent == 'daffy'){
		return sentence.replace(/s/g, 'th');
	}
	else{
		return sentence;
	}
};


//Round 4//

function wordReverse(stringOfLetters){
	var str = stringOfLetters;
	var strReverse = str.split(" ").reverse().join(" ");

	return strReverse;

}


//Round 5//

function letterReverse(stringOfLetters){
	return stringOfLetters.split("").reverse().join("").split(" ").reverse().join(" ");
}


//Round 6 - not complete //

function longest(string) {
	var str = string.split(' ');

	for(i = 0; i < str.length; i++){
		longestWord = str[i].length;
	}
  	
  	return longestWord;
}
















