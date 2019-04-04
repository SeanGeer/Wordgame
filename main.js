var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

var possibleWords = wordFilter(commonWords, 3);
var currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var counter = 5;
var placeholderArray = letterPlaceholders(currentWord);
var previousGuesses = [];
console.log(currentWord); 

document.getElementById("wordDisplay").innerHTML = placeholderArray.join("");
document.getElementById("button").addEventListener("click", playerTurnProcessor);

function playerTurnProcessor(){
	var currentGuess = document.getElementById("input").value;
	previousGuesses.push(currentGuess);	
	document.getElementById('previousGuesses').innerHTML = previousGuesses;
	counter = counter - 1;
	document.getElementById("counter").innerHTML = `Attempts left: + ${counter}`
	console.log(counter)

	for (var i = 0; i < currentWord.length; i++){
		if (currentWord[i] === currentGuess){
			placeholderArray[i] = currentGuess;
			document.getElementById("wordDisplay").innerHTML = placeholderArray.join("");
		} else {
			document.querySelector("#input").value = "";
		}
	}
	if (placeholderArray.join("") == currentWord){
		alert("You won!");
	}
	if (counter < 1){
		alert("Game Over!")
	}
}


function wordFilter(arr, length){
	let output = [];
	for (let i = 0; i < arr.length; i++){
		if (arr[i].length >= length){
      output.push(arr[i]);
		}
	}
	return output;
}
function letterPlaceholders(word){
	let output = [];
	for (var i = 0; i < currentWord.length; i++){
	output.push("_ "); 
	}
	return output;
}

