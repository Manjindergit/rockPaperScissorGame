window.onload = compare;
const weapons = {
  rock: {weakTo: 'paper', strongTo: 'scissors'},
  paper: {weakTo: 'scissors', strongTo: 'rock'},
  scissors: {weakTo: 'rock', strongTo: 'paper'}
}
const arr = ['rock', 'paper', 'scissors'];
function computerPlay() {
  let rand = Math.floor(Math.random() * 3);
  console.log(rand);
  return arr[rand];
}

function humanPlay() {
  let input = window.prompt("Please enter Rock, Paper or Scissor");
  input = input.toLowerCase();
  if (input === "rock"||input === "paper"||input === "scissors"){
    return input;
  }
  else{
    humanPlay();
  }


}

function strength(){
 
}

function compare() {

  let comChoice = computerPlay();
  let humChoice = humanPlay();

  if(weapons[humChoice].strongTo===comChoice){
    console.log('human win');
  }
  else if(weapons[humChoice].weakTo===comChoice){
    console.log('comp win');
  }
  else{
    console.log("Its a tie!");
  }
}