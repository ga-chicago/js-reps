/*
Functions

-input ----> output
-Reusing code
-couple of ways to declare functions
-we will focus on arrow functions, which were introduced in ES6


--Functions should only do one thing and do it well

*/
//Here we declare and define a function
const printBoo = () => {
	console.log('-----------');
	console.log('Boo!');
	console.log('-----------')
}


// now we will CALL the function
printBoo();

//use cont to declare arrow functions

const sum = () => {
	console.log(10+10);
}

sum();


const printTri = () => {
	let hashTag = '';
	for(let i = 0; i <= 5; i++){
	console.log(hashTag += '#');
	}
}
printTri();



const checkInputLength = (input) => {
	if(input.length > 10){
		console.log("Input is greater than ten!")
	}

	else{console.log('Input is less than ten!')}
}

checkInputLength('Hello!')



/*


-Arguments and Parameters

-A parameter is the input expected by a function

-When You pass in a value or variable to the function, it is called the argument

-You can pass any data type as the argument

*/

const sayName = (name) => {
	console.log('Hello my name is ' + name);
}

sayName("MJ"); //MJ is the Argument

let name = "Jim";

sayName(name);






const minusOne = (num) => {


	console.log(num-1);

}

minusOne(5);




const getLastElement = (arr) => {
	console.log(arr[arr.length - 1]);
}

getLastElement(['coffe','latte','tea']);



// Functions can take multiole parameters


const multiply = (num1,num2) =>{
	console.log(num1 * num2);
}

multiply(4,4);



const sentence = (str1,str2,str3) =>{
	console.log("I am from " + str1 + ", " + str2 + " in the " + str3);
}

sentence("Miami","FL","U.S");


// divides three numbers
const divideThreeNumbers = (num1,num2,num3) => {
	console.log(num3/(num2/num1)); 
}
divideThreeNumbers(9,6,2);


/*
-Return values
-Return means that a function once executed has a value
-additionally, return Stops the execution of the code within the function
*/

//returns 10
const ten = () =>{
	return 10;
}

console.log(ten());


// A return is no way the same as a console.log
// A function only has a value if it returns something



const newMultiply = (n1,n2)=>{

	return n1 * n2;
}

let a = 3, b = 3;
console.log('a times b '+ newMultiply(a,b));

// you can use a function as its value
// you can use a called function to represent an argument being passed into a function

console.log(newMultiply(2, newMultiply(a,b)));



const example =(input)=>{
	if(input === 'none'){
		return 0;
	}
	return 1;
}
//prints 0
console.log(example('none'));



const calculateArea = (L,W)=>{
	return L * W;
}

const area = calculateArea(2,2);

console.log(area);

//sums up three numbers and converts to string
const stringify = (a,b,c)=>{
	let total = a+b+c;
	return total.toString();
}

console.log(stringify(1,2,3));
console.log(typeof(stringify(1,2,3)));




const checkAreIdentical = (a,b)=>{
	return a === b;
}
console.log(checkAreIdentical(5,5));



//Lab
//1
const printGreeting = (name)=>{
	return "Hello there " + name;
}

console.log(printGreeting('Joe'));

//2
const reverseWorder = (str)=>{
	let letters="";
	for (let i = 1; i <= str.length; i++){
		letters += str[str.length-[i]];
	}
	return letters
}

console.log(reverseWorder("Hello Taylor"));

//3
const calculate = (num1,num2,operation)=> {
	if (operation === "add"){
		return num1 + num2;
	}
	else if(operation === "subtract"){
		return num1 - num2;
	}
	else if(operation === "div"){
		return num1/num2;
	}
	else if(operation === "mult"){
		return num1 * num2;
	}
	else if(operation === "exp"){
		return Math.pow(num1,num2);
	}
}

console.log(calculate(2,3,"exp"));


//4


const reverseWordOrder = (str)=>{
	let reverseString = '';
	let removeSpace = str.split(' ');
	for(let i = 1; i <= removeSpace.length; i++){
		reverseString += removeSpace[removeSpace.length - [i]] + ' ';

	}
	return reverseString;
}
console.log(reverseWordOrder('My name is Johnny'));

//5

const checkPandigital = (num)=> {
	
	const len = num.toString().length;
	const digitsToString = num.toString().split('');

	for(let i = 0; i < len; i ++){
		if(digitsToString[i] <= 0){
			return "Zero or below is detected";
		}
		else if(digitsToString[i] > len){
			return "Not Pandigital "+ digits[i]+ " is greater than "+ len; 
		}
		else{
			for(let j = i+1; j < len; j ++){
				if(digitsToString[j] === digitsToString[i]){
					return "Not Pandigital";
				}
			}
		}

	}
	
	return "Number is Pandigital";

}

console.log(checkPandigital(123453));


//6

const checkPalindrome = (word)=>{
	let flipper = "";
	for(let i = 1; i <= word.length; i ++){
		flipper += word[word.length - [i]];
	}
	if(flipper === word){
		return true;
	}
	else{return false;}
}


console.log(checkPalindrome('racecar'));






//Round 1

const lengths = (arr)=>{
	lengthArray =[];
	for (let i = 0; i < arr.length; i ++){
		lengthArray.push(arr[i].length);
	}
	return lengthArray;
}


console.log(lengths(['red','green','blue']));



//Round 2

const transmogrifier = (a,b,c)=>{
	return Math.pow((a*b),c);
}

console.log(transmogrifier(2,5,3));


//Round 3

const toonify = (accent,sentence)=>{
	if(accent === "daffy"){
		let newSentence = sentence.replace(/s/g,"th");
		return newSentence;
	}
	else if(accent === "elmer"){
		let newSentence = sentence.replace(/r/g,"w");
		return newSentence;
	}
	else{
		return sentence;
	}
}

console.log(toonify('elmer','I love rock and roll'));











































