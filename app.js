//////LAB TWO: JS REPS///////

///round 1///
const lengths = (arrayOfStrings) => {
  const arrayOfLengths = [];
  for (i = 0; i < arrayOfStrings.length; i++) {
    arrayOfLengths.push(arrayOfStrings[i].length)
  }
  return arrayOfLengths
}
arrayOfStrings = ["hello", "what", "is", "up", "dude"];


////round 2////
const transmogrifier = (num1, num2, num3) => {
  return (num1 * num2) ** num3
}
///8000
///92389579776
//14466001271480793000


//round 3//
const toonify = (accent, sentence) => {
  if(accent = "daffy") {
    return sentence.replace(/s/g, "th")
  } else if(accent = "elmer")  {
    return sentence.replace(/r/g, "w")
  } else {
    return sentence
  }
}

toonify("daffy", "so you smell like sausage")

//Round 5//
const letterReverse = (str) => {
  let splitStr = str.split("")
  let reverseString = splitStr.reverse()
  return reverseString.join("");
}

console.log(letterReverse("Now I know what a Tv dinner feels like"))
console.log(letterReverse("Put Hans back on the line"))


//Round 6
const longest = (arr) => {
  // return the longest value in the array
  let length = 0;
  let longestStrLength = "";

  for(let i = 0; i < arr.length; i++){
        if(arr[i].length > length) {
          length = arr[i].length;
          longestStrLength = arr[i]
        }
  } return longestStrLength
}
longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

//Final round
// const upperCase = (input, func) => {
//     const exclamation = upperCase();
//     return exclamation
// }
// upperCase("I finished this practice");

const repMaster = (input, func) => {
  return func(input) + "proves that I am the rep MASTER!"
}
