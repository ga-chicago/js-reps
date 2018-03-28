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

console.log(transmogrifier(5,3,2));


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


//Round 4 

const wordReverse = (word)=>{

	let wordStore = word.split(' ');

	let reverser = wordStore.reverse().join().replace(/,/g,' ');

	return reverser;



}
console.log(wordReverse('What is Your Name?'));


//Round 5

const letterReverse = (word)=>{

	let letter = [];
	for(let i = 1; i <= word.length; i ++){
		letter.push(word[word.length -[i]])
	}

	

	let reverser = letter.join().replace(/,/g,' ');


	return reverser;

	


}
console.log(letterReverse('What is Your Name?'));

//Round 6

const printLongestWord = (array)=>{
	let newWordArray = [];
	for(let i = 0; i < array.length; i ++){
		//to place in list before tie breaker
		if(newWordArray[array[i].length] !== undefined){
			newWordArray.splice(array[i].length,0,array[i]);
			console.log('There was a tie breaker, but here is the first one.')
			console.log(newWordArray);
		}
		else{
			newWordArray[array[i].length]=array[i];
		}	
	}
	return newWordArray[newWordArray.length-1];
}

console.log(printLongestWord(['Onomatopoeia','formation','of','embezzlement','sound']));

// Final Round


const repMaster = (input,someFunction)=>{

	return someFunction(input);




}

console.log(repMaster('I am the Rep Master',wordReverse));







