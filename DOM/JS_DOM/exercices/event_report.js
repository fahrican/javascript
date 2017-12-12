 document.addEventListener("DOMContentLoaded", function(event) {

 	//let userInput = prompt("Enter a credit card number: ");
 	let pTag = document.querySelector('P');
 	let textarea = document.querySelector('TEXTAREA');

 	let events = {

 		"nFrom":11,
 		"nTo":20,
 		"cTotal":312,
 		"loEvents":[
 		{
 			"sBookingCode":"UP004",
 			"sEvent":"MS - SharePoint 2016",
 			"sVenue":"Plaza Hotel",
 			"nZip":1100,
 			"sAddress":"Sesame Street 12",
 			"dtBegin":"01-11-2017",
 			"dtEnd":"03-11-2017",
 			"lsSpeakers":[
 			"Mr. John Wayne",
 			"Ms. Holly Johnson"
 			]
 		},
 		{
 			"sBookingCode":"AX209",
 			"sEvent":"OT - Content Server 16",
 			"sVenue":"Hotel Regent",
 			"nZip":1400,
 			"sAddress":"Far Way 21",
 			"dtBegin":"08-05-2017",
 			"dtEnd":"12-05-2017",
 			"lsSpeakers":[
 			"Mr. John Wayne",
 			"Ms. Julia Roberts"
 			]
 		}

 		]

 	};
 	
 	function reportEvent(bookingCode){

 		let output;

		if (bookingCode === events.loEvents[0].sBookingCode) {

			let firstEvent = events.loEvents[0];
			output = createReport(firstEvent);
			return output;
		}
		else if(bookingCode === events.loEvents[1].sBookingCode){

			let secondEvent = events.loEvents[1];
			output = createReport(secondEvent);
			return output;
		} 		
 	}

 	function createReport(event){

 		let output = "";
 		output += event.sEvent;
 		output += "\n";
 		output += generateDashes(event.sEvent.length);

 		output += "\nvenue: " + event.sVenue;
 		output += "\nbegin: " + event.dtBegin;
 		output += "\nend: " + event.dtEnd;
 		output += "\nspeakers: ";
 		output += makeLastNameAllCapital(event.lsSpeakers);
 		output += "\n";
 		output += generateDashes(event.sEvent.length);
 		output += "\nall speakers in events.loEvents:\n\n";
 		output += listAllSpeakers(events);

 		return output;
	}

	function generateDashes(number) {

		let dashes = "";
		for (var i = 0; i <= number; i++) {
 			dashes += "-";
 		}

 		return dashes;
	}

	//list all speakers in events.loEvents, but without duplicates
	function listAllSpeakers(jsObject) {

		let speakersAll = "";
		let speakersArray = [];

		jsObject.loEvents.forEach((anEvent) => {
			
			anEvent.lsSpeakers.forEach((eventInArray)=>{

				if (speakersArray.indexOf(eventInArray) === -1) {
					speakersArray.push(eventInArray);
				}
			});

		});

		speakersAll = makeLastNameAllCapital(speakersArray);

 		return speakersAll;
	}

	function makeLastNameAllCapital(speakersArray){

		let speakersAll = "";

		for (var i = 0; i < speakersArray.length; i++) {
			
			let speakers = speakersArray[i].split(" ");
			if (i !== (speakersArray.length-1)) {
				speakers[speakers.length - 1] = speakers[speakers.length - 1].toUpperCase() + "; ";
			} else {
				speakers[speakers.length - 1] = speakers[speakers.length - 1].toUpperCase();
			}
			
			speakersAll += speakers.join(" ");
		}

		return speakersAll;
	}

	// call of the function reportEvent() to display all information
 	let test2 = reportEvent("UP004");
 	textarea.textContent = test2;
 });
