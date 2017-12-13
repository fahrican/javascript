 document.addEventListener("DOMContentLoaded", function(event) {

 	//let userInput = prompt("Enter a credit card number: ");
 	let pTag = document.getElementsByTagName('P');
 	let textarea = document.querySelector('TEXTAREA');
 	let lsWords = ["rebum", "vero"];
 	let listOfunderlinedWords = [ "ipsum ", "rebum", "sed"];
 	
 	function testFunc (lsWords) {
		
		for (var i = 0; i < pTag.length; i++) {

			let highlight = pTag[i].innerHTML;
			lsWords.forEach(word => {

				let newWord = "<span class=\"yellowBG\">" + word + "</span>";
				highlight = highlight.replace(word, newWord);
			});

			pTag[i].innerHTML = highlight;
		}	
	}

	function underlineWords(underlineWords) {
		// body...

		for (var i = 0; i < pTag.length; i++) {
			
			let underlined = pTag[i].innerHTML;
			underlineWords.forEach(word => {

				let wordToUnderline = "<a href='https://en.wikipedia.org/wiki/Lorem_ipsum'><u>"+word+"</u><img src='external.png' title='directs to another website' /></a>";
				underlined = underlined.replace(word, wordToUnderline);
			});

			pTag[i].innerHTML = underlined;
		}
	}

	//jQuery.fn.highlight("verose", className);
	testFunc(lsWords);
	underlineWords(listOfunderlinedWords);
 });
