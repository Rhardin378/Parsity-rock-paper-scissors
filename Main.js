const getUserChoice = () => {
 userInput = prompt("please pick your weapon")
  //userInput = prompt("please choose rock, paper, or scissors")
  userInput.toLowerCase()
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput
  } else {
    console.error('error ERROR ERRORRRRRRRRRRRRRRRRRRR')
  }
}

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 2)

  if (choice === 0) {
    return "rock"
  } else if (choice === 1) {
    return "paper"
  } else {
    return "scissors"
  }

}

const determineWinner = (userChoice, computerChoice) => {
 if (userChoice === "bomb") {
   console.log( "player wins boooom" )
 }
 else if (userChoice === computerChoice) {
    console.log("The game was a tie.")
  }
  else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log(`computer wins`)
    } else {
      console.log(`player wins`);
    }
  } else if (userChoice === "paper"){
    if (computerChoice === "scissors") {
console.log("computer wins")
    } else {
      console.log(`player wins`);
    }
  }
  }


const playGame = () => {
  let userChoice = getUserChoice()
  let computerChoice = getComputerChoice()
  
  console.log(`User's choice is ${userChoice} and Computer's choice is ${computerChoice}`)
  
determineWinner(userChoice, computerChoice) 
  }

playGame()
