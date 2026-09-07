let randomNum = parseInt(Math.random()*100 +1)

const guessInput = document.querySelector('#guessField')
const gueesSubmit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remainGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let numGuess = 0;
let prevGuess = []

const p = document.createElement('p')

let playGame = true

if(playGame){
    gueesSubmit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(guessInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1){
        alert("Please enter a  number greater than 1")
    }else if(guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 9){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNum){
        displayMessage(`You guessed right`)
        endGame()
    }else if(guess < randomNum){
        displayMessage(`Guess is toooo low`)
    }else if(guess > randomNum){
        displayMessage(`Guess id toooo high`)
    }
}

function displayGuess(guess) {
    guessInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remainGuess.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `${message}`
}

function endGame() {
    guessInput.value = ''
    guessInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" >Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    startGame()
}

function startGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*100 +1)
        guessInput.value = ''
        prevGuess = []
        guessSlot.innerHTML = ''
        numGuess = 0
        remainGuess.innerHTML = `${10-numGuess}`
        displayMessage('')
        guessInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}