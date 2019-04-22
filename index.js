let userscore=0
let computerscore=0
const userscore_span = document.getElementById("us");
const computerscore_span = document.getElementById("cs");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
const choices = ['r','p','s'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function convertToWords(letter){
    if(letter=='r') return "Rock";
    if(letter=='p') return "Paper";
    return "Scissors";
}

function win(userChoice,getComputer){
userscore++;
userscore_span.innerHTML = userscore;
computerscore_span.innerHTML = computerscore;
const smalluserword="user".fontsize(3).sup();
const smallcompword="comp".fontsize(3).sup();
result_div.innerHTML = convertToWords(userChoice)+ smalluserword + " beats " + convertToWords(getComputer)+smallcompword + " . Congo! you won.";
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow')},300);
}

function lose(userChoice,getComputer){
computerscore++;
userscore_span.innerHTML = userscore;
computerscore_span.innerHTML = computerscore;
const smalluserword="user".fontsize(3).sup();
const smallcompword="comp".fontsize(3).sup();
result_div.innerHTML = convertToWords(userChoice)+ smalluserword + " loses to " + convertToWords(getComputer)+smallcompword + " . sad! you lost.";
document.getElementById(userChoice).classList.add('red-glow');
setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow')},300);
}

function draw(userChoice,getComputer){
userscore_span.innerHTML = userscore;
computerscore_span.innerHTML = computerscore;
const smalluserword="user".fontsize(3).sup();
const smallcompword="comp".fontsize(3).sup();
result_div.innerHTML = convertToWords(userChoice)+ smalluserword + " is same to the " + convertToWords(getComputer)+smallcompword + " draw";
document.getElementById(userChoice).classList.add('gray-glow');
setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-glow')},300);
}




function game(userChoice){
const getComputer = getComputerChoice();
switch(userChoice + getComputer){
case "pr":
case "sp":
case "rs":
 win(userChoice,getComputer);
break;

case "rp":
case "ps":
case "sr":
 lose(userChoice,getComputer);
break;

case "rr":
case "ss":
case "pp":
 draw(userChoice,getComputer);
break;
}
}

function main(){

rock_div.addEventListener('click', function(){
game("r");
    //console.log("hey you clicked on rock");
})

paper_div.addEventListener('click', function(){
game("p");
    //console.log("hey you clicked on paper");
})

scissor_div.addEventListener('click', function(){
game("s");
    //console.log("hey you clicked on scissor");
})

}

main();