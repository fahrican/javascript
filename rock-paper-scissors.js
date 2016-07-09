/**JavaScript**/

// Just for fun game.

confirm("Let's play Rocket, Paper or Scissors!");
var userChoice = prompt("Do you choose rock, paper or scissors?");
alert("You: " + userChoice);
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} 
alert("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    
    if(choice1 === choice2){
        
        var val = "The result is a tie!";
        return val;
    }
    else if(choice1 === "rock"){
        
        if(choice2 === "scissors"){
             var a = "You win";
             return a;
        }
        else{
            
            var b = "Computer wins";
            return b;
        }
    }
    else if(choice1 === "paper"){
        
        if(choice2 === "rock"){
             var a = "You win";
             return a;
        }
        else{
            
            var b = "Computer wins";
            return b;
        }
    }
    
};

alert(compare(userChoice, computerChoice));
