let maxScore = null
let myMaxScoreText = document.querySelector(".maxScore")
let myMaxScoreSubtractButton = document.querySelector("#maxScoreSubtract")
let myMaxScoreAddButton = document.querySelector("#maxScoreAdd")

let player1Score = null
let myPlayer1ScoreText = document.querySelector("#player1Score")
let myPlayer1SubtractButton = document.querySelector("#player1Subtract")
let myPlayer1AddButton = document.querySelector("#player1Add")

let player2Score = null
let myPlayer2ScoreText = document.querySelector("#player2Score")
let myPlayer2SubtractButton = document.querySelector("#player2Subtract")
let myPlayer2AddButton = document.querySelector("#player2Add")

let myResetButton = document.querySelector("#reset")

let myWinnerText = document.querySelector("#winnerText")

//Check for winner
const endGame = function() {
    myMaxScoreSubtractButton.setAttribute("disabled", true)
    myMaxScoreAddButton.setAttribute("disabled", true)
    myPlayer1SubtractButton.setAttribute("disabled", true)
    myPlayer1AddButton.setAttribute("disabled", true)
    myPlayer2SubtractButton.setAttribute("disabled", true)
    myPlayer2AddButton.setAttribute("disabled", true)
}

const checkForWinner = function() {
    if (maxScore === player1Score) {
        myPlayer1ScoreText.classList.add("winner")
        myWinnerText.textContent = "Player 1 is the winner!"
        endGame()
    } else if (maxScore === player2Score) {
        myPlayer2ScoreText.classList.add("winner")
        myWinnerText.textContent = "Player 2 is the winner!"
        endGame()
    }
}

//Initialize scoreboard
const updateScores = function() {
    myMaxScoreText.textContent = maxScore
    myPlayer1ScoreText.textContent = player1Score
    myPlayer2ScoreText.textContent = player2Score
    checkForWinner()
}

const initializeScoreboard = function() {
    maxScore = 5
    player1Score = 0
    player2Score = 0
    updateScores()
}

initializeScoreboard()

//Subtract from Max Score

myMaxScoreSubtractButton.addEventListener("click", function() {
    maxScore--
    updateScores()
})

//Add to Max Score
myMaxScoreAddButton.addEventListener("click", function() {
    maxScore++
    updateScores()
})

//Subtract from Player 1's Score
myPlayer1SubtractButton.addEventListener("click", function() {
    player1Score--
    updateScores()
})

//Add to Player 1's score
myPlayer1AddButton.addEventListener("click", function() {
    player1Score++
    updateScores()
})

//Subtract from Player 2's Score
myPlayer2SubtractButton.addEventListener("click", function() {
    player2Score--
    updateScores()
})

//Add to Player 2's score
myPlayer2AddButton.addEventListener("click", function() {
    player2Score++
    updateScores()
})

//Reset the game
myResetButton.addEventListener("click", function(myObject) {
    //console.log(myObject.target.textContent)
    myMaxScoreSubtractButton.removeAttribute('disabled')
    myMaxScoreAddButton.removeAttribute('disabled')
    myPlayer1SubtractButton.removeAttribute('disabled')
    myPlayer1AddButton.removeAttribute('disabled')
    myPlayer2SubtractButton.removeAttribute('disabled')
    myPlayer2AddButton.removeAttribute('disabled')
    myPlayer1ScoreText.classList.remove("winner")
    myPlayer2ScoreText.classList.remove("winner")
    myWinnerText.textContent = ""
    initializeScoreboard()
})
