//1. Write a function that accepts single parameter consisting of an array of words
//   and returns the length of each word to a seperate array.
var words = ["hello", "what", "is", "up", "dude"]
var wordLengths = [];

function lengths() {
  for (i = 0; i < words.length; i ++) {
    wordLengths.push(words[i].length);
  }
};

lengths(words);
wordLengths;

//2. Write a function call transmogrifier that accepts three arguments and returns argument
//   1 multiplied by argument 2 raised to the power of argument 3.
function transmogrifier(num1, num2, num3) {
  var result = Math.pow((num1 * num2), num3); 
  console.log(result);
};

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

//3. Write a function called toonify that takes two parameters (accent, sentanct). 
//   - If the accent string is "daffy", return a modified version of the sentance with all 
//     's' replaced with "th".
//   - If the accent string is "elmer", replace all 'r' with 'w'.
//   - If the string is not recognized, return the sentance as-is.

function toonify(accent, sentence) {
  if (accent === "daffy") {
    var newSentence = sentence.replace(/s/g, "th");
    console.log(newSentence);
  }
  else if (accent === "elmer" ) {
    var newSentence = sentence.replace(/r/g, "w");
    console.log(newSentence);
  }
  else {
    console.log(sentence);
  }
  };

toonify("daffy", "I'm not like most people; I can't stand pain, it hurts me.");
toonify("elmer", "Shh. Be very very quiet. I'm hunting rabbits!")
toonify("gregory", "One shouldn't mock those with a speech impediment.");

//4. Write a function call wordRevers that accepts a single argument string with the order
//   of words reversed. Use string.split() to create an array of words, then reverse the order
//   using array.reverse(). Loop through to create a new string.

function wordReverse(stringToSplit) {
  var array = stringToSplit.split(" ");
  var reverseArray = array.reverse();  
  console.log(reverseArray); 
}; 
wordReverse("Now I know what a TV dinner feels like");

//5. Write a function letterReverse that accepat a string argument. Keeping the order of words
//   reverse the letters of each word.
function letterReverse(string) {
  console.log(string.split("").reverse().join("").split(" ").reverse().join(" "));
};

letterReverse("Now I know what a TV dinner feels like");
letterReverse("Put Hans back on the line");

//6. Write a function longest that accepts a single array of srings as an argument. Return the 
//   word in the array, or the one that appears first if there is a tie.
function longest(words){
  var longestWord = '';
  for (var i = 0; i < words.length; i ++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

longest(["oh", "good", "grief"]);
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]); 


