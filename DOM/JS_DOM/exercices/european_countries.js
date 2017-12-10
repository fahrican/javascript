 document.addEventListener("DOMContentLoaded", function(event) {

 	let pTag = document.querySelector('P');
 	let test = document.querySelector('TEXTAREA');
 	let userInput = [];
 	for (let i = 3; i >= 1; i--) {
 		
 		userInput.push(prompt("Enter a european country (" + i +" left): "));
 	}
 	

 	function listEuropeanCountries(countries){

 		countries.sort();
 		const lsEuroZone = ["AUSTRIA", "BELGIUM", "CYPRUS", "ESTONIA", "FINLAND", "FRANCE", "GERMANY", "GREECE", "IRELAND", "ITALY", "LATVIA", "LITHUANIA", "LUXEMBOURG", "MALTA", "NETHERLANDS", "PORTUGAL", "SLOVAKIA", "SLOVENIA", "SPAIN" ];

 		let output = "List of the 3 countries: \n";
 		let tempLength = output.length;
 		for (let i = 0; i <= tempLength; i++) {
 			output += "-";	
 		}
 		output += "\n";

 		for(let i = 0; i < countries.length; i++){

 			countries[i] = countries[i].toUpperCase();
 			if (lsEuroZone.indexOf(countries[i]) != -1 ) {

 				countries[i] += " (EU)";
 			}
 			output += countries[i] +"\n";
 		}
 		alert(output);
 		test.textContent = output;
 	}

 	listEuropeanCountries(userInput);
 	
});

