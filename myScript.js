const weapons = {
  rock: { weakTo: 'paper', strongTo: 'scissor' },
  scissor: { weakTo: 'rock', strongTo: 'paper' },
  paper: { weakTo: 'scissor', strongTo: 'rock' }
  
}

const arr = ['rock', 'paper', 'scissors'];
function computerPlay() {
  let rand = Math.floor(Math.random() * 3);
  console.log(rand);
  return arr[rand];
}

function compare(input) {

  let comChoice = computerPlay();
  let humChoice = input;
  let displayResult;
console.log(humChoice);
  if (weapons[humChoice].strongTo === comChoice) {
    displayResult = 'human win';
  }
  else if (weapons[humChoice].weakTo === comChoice) {
    displayResult = 'comp win';
  }
  else {
    displayResult = "Its a tie!";
  }

  display(displayResult);
}

function display(result) {
  const displayDivisor = document.querySelector('.resultArea');
  displayDivisor.textContent = result;
}