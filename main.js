//1
var arrayOfNumbers = []

var lengths = function(array1){
	for(var i = 0; i < array1.length; i++){
		arrayOfNumbers.push(array1[i].length)
	}
	return arrayOfNumbers;
}


var words = ["hello", "what", "is", "up", "dude"]
lengths(words)

//2
var transmogrifier = function(num1, num2, num3){
	return Math.pow((num1 * num2), num3)
}

transmogrifier(5, 4, 3); //8000
transmogrifier(13, 12, 5); //92389579776
transmogrifier(42, 13, 7); //14466001271480793000

//3
var toonify = function(accent, sentence){
	if(accent === 'daffy'){
		var splitSent = sentence.split("");
		for(var i = 0; i < splitSent.length; i++){
			if(splitSent[i] === 's'){
				splitSent[i] = 'th'
			}			
		}
		return splitSent.join("");
	}
	else if(accent === 'elmer'){
		var splitSent = sentence.split("");
		for(var i = 0; i < splitSent.length; i++){
			if(splitSent[i] === 'r'){
				splitSent[i] = 'w'
			}			
		}
		return splitSent.join("")
	}
}
toonify('daffy', "so you smell like sausage");

//4
var wordReverse = function(string){
	var array = string.split(" ");
	return array.reverse().join(" ");
}
wordReverse("Now I know what a TV dinner feels like")

//5
var letterReverse = function(string){
	var array = string.split(" ");
	var reorder = []
	for(var i = 0; i < array.length; i++){
		var wordSplit = array[i].split("").reverse().join("");
		reorder.push(wordSplit);
	}
	return reorder.join(" ")

}
letterReverse("Now I know what a TV dinner feels like")

//6
var longest = function(strings){
	var lgth = 0;
	var longestW;
	for(var i = 0; i < strings.length; i++){
		if(strings[i].length > lgth){
			longestW = strings[i];
			lgth = strings[i].length;
		}
	}
	return longestW
}
longest(["oh", "good", "grief"]) 
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

//7 
var repMaster = function(input, funktion){
	return funktion(input) + " proves I am the rep MASTER!"
}
repMaster("Never give your heart to a blockhead", wordReverse);



