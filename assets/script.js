var initials = document.querySelector(".initials");
var startBtn = document.querySelector('.startBtn');
var quizOver = document.querySelector(".quizOver");
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount;
var isGameOver = false;


//initialize the game

//timer
function countdown() {
    var timeLeft = 60;
  
  }

//start the game
startBtn.addeventListener("click", startTime);

//click event for "startBtn"
function startGame() {
    isGameOver = false;
    timerCount = 60;
    startBtn.disabled = true;
    startTimer()

}
//quiz rules

//quizOver function when timer runs out or all answers answered
function quizOver() {
    startBtn.disabled = false;
}


//save score
initials.addEventListener("click")
