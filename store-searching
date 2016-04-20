/**JavaScript**/

// my two variables, that I need for this program
var grocerieList = ["water", "bread", "cherries", "honey", "tomatoes"];
var userEntry;

// the function to write in the document
function thePrint(someThing){

	document.getElementById('mytest').innerHTML = someThing;
};

// here starts the main part of the program, wth an infinite loop
while(true){

	userEntry = prompt(" Press \"quit\" to close this program, press \"list\" to see all groceries, or type the name of one grocery to see, if it's in the store.");
	userEntry = userEntry.toLowerCase();

	if(userEntry === "quit"){

		break;
	}
	else if(userEntry === "list"){

		thePrint(grocerieList.join(", "));
	}
	else{
		// if an item is not in the array it has the value -1
		if(grocerieList.indexOf(userEntry) > -1){

			thePrint("Yes, we have " + userEntry);
		}
		else{

			thePrint("Sorry, we don't have " + userEntry);
		}
	}

}
