// JavaScript-File

var theQuestions = [

	["Biggest shadow bank in the world?", "Blackrock"],
	["Most valuable company in the world?", "Google"],
	["Finance capital of Europe?", "London"]

];

function thePrint(aMessage){

	document.getElementById('output').innerHTML = aMessage;

};

var correctQuest = [];
var correctAnswers;
var wrongQuest = [];
var totalResult = 0;
var sentence;

for(var a = 0; a < theQuestions.length; a++){

	correctAnswers = prompt(theQuestions[a][0]);

	if(correctAnswers === theQuestions[a][1]){

		totalResult++;
		correctQuest.push(theQuestions[a][0]);
	}
	else{

		wrongQuest.push(theQuestions[a][0]);
	}

}

function justTry(arri){

	var htmList = "<ul>";

	for(var y = 0; y < arri.length; y++){

		htmList += "<li> " + arri[y] + " </li>";
	}

	htmList += "</ul>";
	return htmList;
}

sentence = "<p> You have: " + totalResult + " of 3 right. </p>";
sentence += "<h3> Your correct answered questions. </h3>"
sentence += justTry(correctQuest);
sentence += "<h3> Your wrong answered questions. </h3>"
sentence += justTry(wrongQuest);

thePrint(sentence);
