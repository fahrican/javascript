 document.addEventListener("DOMContentLoaded", function(event) {

 	let userInput = prompt("Enter a credit card number: ");
 	let pTag = document.querySelector('P');

 	function maskCreditCard(creditCardNumber){

 		if (validateCreditCard(creditCardNumber) !== 19) {
 			pTag.textContent = "invalid credit card number";
 			alert("invalid credit card number");
 		}
 		else {

 			let temp = '' + creditCardNumber;
 			let newCreditCardNumber = temp.substr(0, 3);
 			for(let i = 0; i < (temp.length - 3); i++){

 				newCreditCardNumber += "*";
 			}
 			newCreditCardNumber += temp.substr(temp.length - 3, temp.length);

 			pTag.textContent += newCreditCardNumber;
 		}
 		
 	}

 	function validateCreditCard(creditCardNumber){

 		let creditCardNumberAsString = '' + creditCardNumber;
 		if (creditCardNumberAsString.length === 19) {
 			
 			return 19;
 		}
 		return 0;
 	}

 	maskCreditCard(userInput);
 	
});

