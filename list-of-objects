// JavaScript-File

var myValues = [

	{
		name: "Fahri Can",
		track: "iOS",
		achievements: 1122,
		points: 600
	},

	{
		name: "Philipp Steiner",
		track: "Android",
		achievements: 1100,
		points: 200
	},

	{
		name: "Florian Themayer",
		track: "Web Design",
		achievements: 1600,
		points: 800
	},

	{
		name: "Gerald Hörhan",
		track: "Front End Development",
		achievements: 1200,
		points: 900
	},

	{
		name: "Peter Thiel",
		track: "Back End Development",
		achievements: 1400,
		points: 100
	},

];

// I need this string value later, to print out the complete message
var myKey = "";

function thePrint(aValue){

	document.getElementById('output').innerHTML = aValue;
};


/** Beacause myValue is an array, I can access
	each elment with .[i] as an index number,
  	and with .property I can access the values of each property in the objects
**/ 
for(var i = 0; i < myValues.length; i++){

	myKey += "<h4> Student: " + myValues[i].name + " </h4>";
	myKey += "<p> Track: " + myValues[i].track + " </p>";
	myKey += "<p> Achievements: " + myValues[i].achievements + " </p>";
	myKey += "<p> Points: " + myValues[i].points + " </p>";

}

thePrint(myKey);
