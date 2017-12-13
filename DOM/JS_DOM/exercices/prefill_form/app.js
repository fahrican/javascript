 document.addEventListener("DOMContentLoaded", function(event) {

 	//let userInput = prompt("Enter a credit card number: ");
 	let pTag = document.getElementsByTagName('P');
 	let textarea = document.querySelector('TEXTAREA');
 	let form = document.querySelector('FORM');
 	console.log(form);
 	
 	let oUser = {
			  sLogin : "jwayne"
			, sName : "Johen Wayne"
			, mail : "john@wayne.com"
			, dtLastLogin : "01-11-2017"
			, bNewsletter : true
			, sCountry : "DE"
			, nAge : 40
		};


	function filloutForm(jsObject) {
			// body...

			form[0].value = jsObject.sName;
			form[1].value = jsObject.mail;
			form[2].value = jsObject.sCountry;
			form[3].value = jsObject.dtLastLogin;
			//$("#leave").val("DE");

			console.log(form[4].checked);
			form[4].checked = true;
	}

	filloutForm(oUser);

 });// end of DOMContentLoaded
