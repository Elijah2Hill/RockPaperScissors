var rounds = parseInt(prompt("How many rounds do you want to play?"));

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        alert("The result is a tie!");
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            alert("Rock wins!");
        }
        else{
            alert("Paper wins!");
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            alert("Paper wins!");
        }
        else{
            alert("Scissors wins!");
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            alert("Rock wins!");
        }
        else{
            alert("Scissors wins!");
        }
    }
};
compare(userChoice,computerChoice);
