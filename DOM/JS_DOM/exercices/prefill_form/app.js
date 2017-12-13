 document.addEventListener("DOMContentLoaded", function(event) {

 	//let userInput = prompt("Enter a credit card number: ");
 	let pTag = document.getElementsByTagName('P');
 	let textarea = document.querySelector('TEXTAREA');
 	let form = document.querySelector('FORM');
 	
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
			form[0].readOnly = true;
			form[0].disabled = true;
			form[1].value = jsObject.mail;
			if (jsObject.nAge >= 0 && jsObject.nAge <= 20) {
				form[2].value = "0 .. 20 years old (young)";
			}
			else if (jsObject.nAge >= 21 && jsObject.nAge <= 59) {
				form[2].value = "21 .. 59 years old (middle_age)";
			}
			else {
				form[2].value = "60 .. n years old (old)";	
			}
			
			form[3].value = jsObject.sCountry;
			form[4].value = jsObject.dtLastLogin;
			form[5].checked = true;
	}

	filloutForm(oUser);

 });// end of DOMContentLoaded
