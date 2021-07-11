// * Remember to run "go live" below to see your changes on save.

// * write all your code INSIDE the function below
function init() {


const p1Choice = document.querySelector('#p1choice')
const p2Choice = document.querySelector('#p2choice')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const resetButton = document.querySelector('#reset')
const winnerText = document.querySelector('#winner')



function handleChoiceClick(click){
    console.log('Player chose', click.target.textContent) // Sweetness #1 got it console logging the choice so now can take that data and give it to something else
    const playerChoice = click.target.textContent
    p1Choice.textContent = playerChoice // Sweetness #2 got the players choice to display on screen
    const randomNumber = (Math.floor(Math.random() * (3 - 1 + 1)) + 1)
    console.log(randomNumber)
    // Sweetness #4 got the random number to generate everytime rock, paper, or scissors is clicked
    // Now to make those numbers relate to the computers choice

    if(randomNumber == 1) {
        p2Choice.textContent = 'Rock';
    } else if(randomNumber == 2) {
        p2Choice.textContent = 'Paper';
    } else {
        p2Choice.textContent = 'Scissors';
    }
    // Sweetness #5 Got the computer picking a random choice, all thats left is to update the winner text which requires logic to see who wins
    
    if (p2Choice.textContent == 'Rock' && p1Choice.textContent == 'Rock') {
        console.log(`Rock & Rock, it's a draw`)
        winnerText.textContent = `Rock & Rock, it's a draw`
    } else if (p2Choice.textContent == 'Paper' && p1Choice.textContent == 'Paper'){
        console.log(`Paper & Paper, it's a draw`)
        winnerText.textContent = `Paper & Paper, it's a draw`
    } else if (p2Choice.textContent == 'Scissors' && p1Choice.textContent == 'Scissors') {
        console.log(`Scissors & Scissors, it's a draw`)
        winnerText.textContent = `Scissors & Scissors, it's a draw`
        // Choices for draws

    } else if (p2Choice.textContent == 'Scissors' && p1Choice.textContent == 'Paper'){
        console.log(`Computer wins, Scissors beats Paper`)
        winnerText.textContent = `Computer wins, Scissors beats Paper`
    } else if (p2Choice.textContent == 'Paper' && p1Choice.textContent == 'Scissors'){
        console.log(`Player wins, Scissors beats Paper`)
        winnerText.textContent = `Player wins, Scissors beats Paper`
        // Choices for scissors and paper

    } else if (p2Choice.textContent == 'Paper' && p1Choice.textContent == 'Rock'){
        console.log(`Computer wins, Paper beats Rock`)
        winnerText.textContent = `Computer wins, Paper beats Rock`
    } else if (p2Choice.textContent == 'Rock' && p1Choice.textContent == 'Paper'){
        console.log(`Player wins, Paper beats Rock`)
        winnerText.textContent = `Player wins, Paper beats Rock`
        // Choices for paper and rock

    } else if (p2Choice.textContent == 'Rock' && p1Choice.textContent == 'Scissors'){
        console.log(`Computer wins, Rock beats Scissors`)
        winnerText.textContent = `Computer wins, Rock beats Scissors`
    } else if (p2Choice.textContent == 'Scissors' && p1Choice.textContent == 'Rock'){
        winnerText.textContent = `Player wins, Rock beats Scissors`
        // Choices for rock and scissors
    }

    }

function handleReset(click){ // Sweetness #3 got the reset button working
    console.log('Player has decided to rest the computer and player choice')
    p1Choice.textContent = ''
    p2Choice.textContent = ''
}

rockButton.addEventListener('click', handleChoiceClick)
paperButton.addEventListener('click', handleChoiceClick)
scissorsButton.addEventListener('click', handleChoiceClick)
resetButton.addEventListener('click', handleReset)


}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)

// Things that need to happen: 

