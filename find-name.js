/**JavaScript**/


function thePrint(anyValue){

	document.getElementById('mytest').innerHTML = anyValue;
};


var theStudents = [

	{
		name: "Mark",
		track: "iOS",
		achievements: 100,
		points: 200
	},
	{
		name: "Peter",
		track: "Android",
		achievements: 300,
		points: 400
	},
	{
		name: "Sean",
		track: "JavaScript",
		achievements: 500,
		points: 600
	},
	{
		name: "Drew",
		track: "Java",
		achievements: 700,
		points: 800
	},
	{
		name: "Oliver",
		track: "Python",
		achievements: 900,
		points: 1000
	}
	
	
];

var message = "";
var student;
var search;

function getReport(someT){

	var report = "<h2> Student: " + student.name + "</h2>";
	report += "<p> Track: " + student.track + "</p>";
	report += "<p> Achievements: " + student.achievements + "</p>";
	report += "<p> Points: " + student.points + "</p>";
	return report;
}

while(true){

	search = prompt("Type a student name or \"quit\" to end the program.");
	if(search === null || search.toLowerCase() === "quit"){

		break;
	}
	for(var i = 0; i < theStudents.length; i++){

		student = theStudents[i];
		if(student.name === search){

			message = getReport(student);
			thePrint(message);
		}
	}
	
}
