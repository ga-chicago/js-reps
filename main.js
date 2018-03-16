var lengths = function(array){


	var stringLengths = [];

	for(var i =0; i < array.length; i++){

		stringLengths.push(array[i].length);
	}

	return stringLengths;

}

var words = ["hello", "what", "is", "up", "dude"];
lengths(words);

var transmogrifier = function(x, y, z){


	return Math.pow((x*y), z);
}

transmogrifier(5, 3, 2);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

var toonify = function(accent, sentence){

	var finalName = "";
	
	if(accent === "daffy"){

			finalName = sentence.replace(/s/g, 'th');
			return finalName;

		


	}else if(accent === 'elmer'){

			finalName = sentence.replace(/w/g, 'r');
			return finalName;


	}else{
		return finalName;


	}

}

toonify("daffy", "so you smell like sausage");

var wordReverse = function(input){

	var final = "";

	var str = input.split(" ");
	str.reverse();

	for(var i = 0; i < str.length; i++){

		if(i === 0){

			final = str[i];
		}else{

		final = final + " " + str[i];
		}
	}

	return final;

}

wordReverse("Now I know what a TV dinner feels like");


var letterReverse = function(input){

	var tempWords = "";
	var tempWordSplit = [];
	var temp ="";
	var final = "";

	var temp2 = "";

	tempWords = input.split(" ");

	for(var i = 0; i < tempWords.length; i++){

			

			temp = tempWords[i].toString();
			
			
			temp2 =temp.split('').reverse().join('');
			

		 tempWordSplit.push(temp2);

		 if(i === 0){
			final = tempWordSplit[i];
		}
		else{

			 final = final + " " + tempWordSplit[i]; 
		}
	}

	return final;


}

letterReverse("Now I know what a TV dinner feels like");

var longest = function (input){

	var long = "";
	var cur = 0;
	var l = long.length;

	for(var i = 0; i < input.length; i++){


		if(input[i].length > l){

			long = input[i];
			l = input[i].length
			cur = i;
		}
		else if(input[i].length === long.length){

				long = input[cur];
		}
	}

	return long;

}

longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]);


var repMaster = function(input, func){


	return func(input) + " proves that I am the rep MASTER!";


}
repMaster("Never give your heart to a blockhead", letterReverse)
