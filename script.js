// Links to the start button that will play the game
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var answerChoices = Array.from(
  document.getElementsByClassName("answer-choices")
);
// console.log(answerChoices);

var currentQuestion = {};
var answerInput = false;
// var userScore;
var questionCounter = 0;
var remainingQuestions = [];
var userAnswer = null;
var gameTimer;
var timer = 20; //seconds

// Questions for the game
var gameQuestions = [
  {
    question: "What is Iron Man's real name?",
    answerChoice1: "Steve Rodgers",
    answerChoice2: "Tony Stark",
    answerChoice3: "Bruce Banner",
    answerChoice4: "Robert Downey Jr.",
    answer: 2,
  },
  {
    question:
      "Who is the strongest Avenger? *Hint: Answered in Thor: Ragnorak in the Quinjet*",
    answerChoice1: "Thor",
    answerChoice2: "Hawkeye",
    answerChoice3: "Hulk",
    answerChoice4: "Captain America",
    answer: 3,
  },
  // {
  //   question: "Who is the director of S.H.E.I.L.D.?",
  //   answerChoice1: "Nick Fury",
  //   answerChoice2: "Agent Coleman",
  //   answerChoice3: "Steve Rodgers",
  //   answerChoice4: "Peggy Carter",
  //   answer: 1,
  // },
  // {
  //   question:
  //     "Which character turns into a big green monster when he gets angry?",
  //   answerChoice1: "Black Panther",
  //   answerChoice2: "Thor",
  //   answerChoice3: "Hulk",
  //   answerChoice4: "Black Widow",
  //   answer: 3,
  // },
  // {
  //   question: "In Iron Man 1, who is Tony Stark's A.I. that runs his suit?",
  //   answerChoice1: "FRIDAY",
  //   answerChoice2: "Pepper Potts",
  //   answerChoice3: "JARVIS",
  //   answerChoice4: "HAPPY",
  //   answer: 3,
  // },
];
// Event listener to know when the user wants to startGame()
var startButtonElement = document.getElementById("start-button");
if (startButtonElement) {
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      startGame();
    });
}

// document.getElementById("highScore").addEventListener("click", function () {
//   alert("You have not played the game! Click Start Game! to get a highscore!");
// });

function startGame() {
  questionCounter = 0;
  remainingQuestions = [...gameQuestions];
  console.log("remainingQuestions: ", remainingQuestions);
  startTimer();
  $("#timer-countdown").text(timer);
  getNextQuestion();
}

function startTimer() {
  gameTimer = setInterval(function () {
    if (timer >= 0) {
      $("#timer-countdown").text(timer);
      timer--;
    } else {
      console.log("game over");
      clearInterval(gameTimer);
    }
  }, 1000);
}

function checkUserAnswer(userAnswer, answer) {
  // check to see if userAnswer === currentQuestion.answer0
  console.log("userAnswer: ", userAnswer); // string
  console.log("answer: ", answer); // number
  if (userAnswer === answer) {
    timer = timer + 4;
    // console.log("that is correct, userScore + 10: ", userScore);
    $("#question-answer").text("Correct!");
    $("#question-answer").show();
  } else {
    timer = timer - 2;
    // console.log("that is wrong, minus 5 pts ", userScore);
    $("#question-answer").text("Wrong!");
    $("#question-answer").show();
  }

  return getNextQuestion();
}

function getNextQuestion() {
  setTimeout(function () {
    $("#question-answer").hide();
  }, 550);
  answerInput = false;
  questionCounter++;
  var questionIndex = Math.floor(Math.random() * remainingQuestions.length);
  currentQuestion = remainingQuestions[questionIndex];
  console.log("currentQuestion: ", currentQuestion);

  if (remainingQuestions.length > 0) {
    $("#question").text(currentQuestion.question);
    $("#answer1").text(currentQuestion.answerChoice1);
    $("#answer2").text(currentQuestion.answerChoice2);
    $("#answer3").text(currentQuestion.answerChoice3);
    $("#answer4").text(currentQuestion.answerChoice4);

    remainingQuestions.splice(questionIndex, 1);

    if (remainingQuestions.length === 0) {
      createSubmitButton();
    }
  }
}

function createSubmitButton() {
  $("#nextBtn").text("Submit");
  document.getElementById("nextBtn").addEventListener("click", (event) => {
    var submitBtn = document.getElementById("nextBtn");
    console.log("Submit button clicked: ", event.target);
    clearTimeout(gameTimer);
    timer = timer + 1;
    submitBtn.href = "./highscores.html";
    localStorage.setItem("highscore", timer);
    $("#highscore").text(timer);
    console.log("timer that should be equal to highscore ", timer);
  });
}

var submitNameElement = document.getElementById("submitName");
if (submitNameElement) {
  submitNameElement.addEventListener("click", function () {
    setUserName();
  });
}
function setUserName() {
  var username = $("#name").val();
  console.log("username", username);
  localStorage.setItem("highscore", {
    username: username,
    highscore: highscore
  });
}

var highscoreElement = document.getElementById("highscore");
if (highscoreElement) {
  var userHighScore = localStorage.getItem("highscore");
  console.log(userHighScore);
  $("#highscore").text(userHighScore);
}

// next button event listener
var nextButtonElement = document.getElementById("nextBtn");
if (nextButtonElement) {
  document
    .getElementById("nextBtn")
    .addEventListener("click", function (event) {
      if (answerInput) {
        checkUserAnswer(userAnswer, currentQuestion.answer);
      }
    });
}

// answer event listeners
var answer1Element = document.getElementById("answer1");
if (answer1Element) {
  document
    .getElementById("answer1")
    .addEventListener("click", function (event) {
      getUserAnswer(event);
    });
}
var answer2Element = document.getElementById("answer2");
if (answer2Element) {
  document
    .getElementById("answer2")
    .addEventListener("click", function (event) {
      getUserAnswer(event);
    });
}
var answer3Element = document.getElementById("answer3");
if (answer3Element) {
  document
    .getElementById("answer3")
    .addEventListener("click", function (event) {
      getUserAnswer(event);
    });
}
var answer4Element = document.getElementById("answer4");
if (answer4Element) {
  document
    .getElementById("answer4")
    .addEventListener("click", function (event) {
      getUserAnswer(event);
    });
}

function getUserAnswer(event) {
  userAnswer = parseInt(event.target.dataset.number);

  if (!answerInput) {
    answerInput = true;
  }
}
