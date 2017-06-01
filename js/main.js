//round 1
var words = ["hello", "what", "is", "up", "dude"];
var array = [];

var lengths = function (arrayOfStrings){

	for (var i = 0; i < arrayOfStrings.length; i++ ) {

		var answer = arrayOfStrings[i].length;
		array.push(answer)
	}
	
}
	lengths (words);

//round 2

var transmogrifier = function (a, b, c){
	var step1 = a * b;
	var step2 = Math.pow(step1, c);
	console.log(step2)
}
	transmogrifier();
	//transmogrifier(5, 4, 3) = 8000
	//transmogrifier(13, 12, 5) = 92389579776
	//transmogrifier(42, 13, 7) = 14466001271480793000

//round 3
var toonify = function (accent, str) {
	
	var re1 = /s/gi;
	var re2 = /r/gi;

		if (accent === "daffy") {
			var daffyTalk = str.replace(re1, "th");
			console.log(daffyTalk);
		} else if (accent === "elmer"){
			var elmerTalk = str.replace(re2, "w");
			console.log(elmerTalk);
		}	else {

		}
}
	toonify("daffy", "so you smell like sausage");

//round 4
var wordReverse = function (str){
	var newArray = str.split(" ");
	var reverseArray = newArray.reverse();
	
	var answer = reverseArray.join(" ");
	return answer;	
}

wordReverse("Now I know what a TV dinner feels like");

//round 5
var letterReverse = function (arrayOfStrings) {
	var splitArray = str.split("").reverse().join("").split(" ").reverse().join(" ")
	console.log(splitArray);
}
	letterReverse ("Now I know what a TV dinner feels like");
	//answer = woN I wonk tahw a VT rennid sleef ekil

//Round 6
var longest = function (array){

	var long = "";//hold variable of the current longest word
	var longestWord = 0;//
	var l = long.length;//length of the word in the long varialbe. The length of the current longest word

	for (var i = 0; i < array.length; i++) {//loops through

		if (l < array[i].length) { //checks if the length of the current longest word is great than the current word in the iteration.
			long = array[i];//stores the word in the above is true
			l = array[i].length;//adds the length of the above word
			longestWord = i;//stores the current iteration number
		}else if (array[i].length === long.length){//checks to see if the current iteration word and the current longest word are equal
			long = array[longestWord];
		}
	}
	console.log(long);
}
	longest (["oh", "good", "grief"]);


//round 7

var repMaster = function(string, myFunction){
		
		return myFunction(string) + " proves that I am the rep MASTER!";
		}
	repMaster("Never give your heart to a blockhead", wordReverse);




















