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