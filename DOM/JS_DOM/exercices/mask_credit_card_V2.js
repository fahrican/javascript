 document.addEventListener("DOMContentLoaded", function(event) {

 	let userInput = prompt("Enter a credit card number: ");
 	let showDigits;
 	let correctDigits = true;
 	do {

 		showDigits = prompt("You can choose between 1 and 4 digits to be shown");
 		showDigits = parseInt(showDigits);


 		if(showDigits >= 1 && showDigits <= 4){
 			correctDigits = false;
 		}
 		
 	}
 	while(correctDigits);

 	let pTag = document.querySelector('P');
 	let creditCard = {

 		maskCreditCard: function (creditCardNumber, showDigits){

					 		if (this.validateCreditCard(creditCardNumber) !== 16) {
					 			pTag.textContent = "invalid credit card number";
					 			alert("invalid credit card number");
					 		}
					 		else {

					 			let temp = '' + creditCardNumber;
					 			let newCreditCardNumber = "[";
					 			newCreditCardNumber += temp.substr(0, showDigits);

					 			for(let i = showDigits; i < (19-showDigits); i++){

					 				if (newCreditCardNumber.length === 5 || newCreditCardNumber.length === 12 
					 					|| newCreditCardNumber.length === 19) {
					 					
					 					newCreditCardNumber += "]-[";

					 				}
					 				else{
					 					newCreditCardNumber += "*";
					 				}
					 				
					 			}
					 			newCreditCardNumber += temp.substr(temp.length - showDigits, temp.length);
					 			newCreditCardNumber += "]";

					 			pTag.textContent += newCreditCardNumber;
					 		}
 		
 						},

 		validateCreditCard: function (creditCardNumber){

						 		let creditCardNumberAsString = '' + creditCardNumber;
						 		if (creditCardNumberAsString.length === 16) {
						 			
						 			return 16;
						 		}
						 		return 0;
 							}
 	
 	};

 	creditCard.maskCreditCard(userInput, showDigits);
 	
});
