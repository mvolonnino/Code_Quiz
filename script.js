// Links to the start button that will play the game
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var answerChoices = Array.from(
  document.getElementsByClassName("answer-choices")
);
console.log(answerChoices);

var currentQuestion = {};
var answerInput = false;
var score = 0;
var questionCounter = 0;
var remainingQuestions = [];
var userAnswer = null;
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
  {
    question: "Who is the director of S.H.E.I.L.D.?",
    answerChoice1: "Nick Fury",
    answerChoice2: "Agent Coleman",
    answerChoice3: "Steve Rodgers",
    answerChoice4: "Peggy Carter",
    answer: 1,
  },
  {
    question:
      "Which character turns into a big green monster when he gets angry?",
    answerChoice1: "Black Panther",
    answerChoice2: "Thor",
    answerChoice3: "Hulk",
    answerChoice4: "Black Widow",
    answer: 3,
  },
  {
    question: "In Iron Man 1, who is Tony Stark's A.I. that runs his suit?",
    answerChoice1: "FRIDAY",
    answerChoice2: "Pepper Potts",
    answerChoice3: "JARVIS",
    answerChoice4: "HAPPY",
    answer: 3,
  },
];
// Event listener to know when the user wants to startGame()
document.getElementById("start-button").addEventListener("click", function () {
  startGame();
});

function startGame() {
  questionCounter = 0;
  score = 0;
  remainingQuestions = [...gameQuestions];
  console.log("remainingQuestions: ", remainingQuestions);
  startTimer();
  $("#timer-countdown").text(timer);
  getNextQuestion();
  userInputListeners();
}

function startTimer() {
  var gameTimer = setInterval(function () {
    if (timer >= 0) {
      console.log("timer: ", timer);
      $("#timer-countdown").text(timer);
      timer--;
    } else {
      console.log("game over");
      clearInterval(gameTimer);
    }
  }, 1000);
}

function checkUserAnswer(userAnswer, answer) {
  // check to see if userAnswer === currentQuestion.answer
  console.log("userAnswer: ", userAnswer); // string
  console.log("answer: ", answer); // number
  if (userAnswer === answer) {
    console.log("that is correct");
    $("#question-answer").text("Correct!");
    $("#question-answer").show();
  } else {
    console.log("that is wrong");
    $("#question-answer").text("Wrong!");
    $("#question-answer").show();
  }

  return getNextQuestion();
}

function getNextQuestion() {
  setTimeout(function () {
    console.log("timeout");
    $("#question-answer").hide();
  }, 550);
  answerInput = false;
  questionCounter++;
  var questionIndex = Math.floor(Math.random() * remainingQuestions.length);
  currentQuestion = remainingQuestions[questionIndex];
  console.log("currentQuestion: ", currentQuestion);

  // check for how many questions are left
  // when there are none left we want to change next button to submit
  // display score
  if (remainingQuestions.length === 0) {
    $("nextBtn").text("Submit").show();

    console.log("there are no more questions");

    return;
  }

  $("#question").text(currentQuestion.question);

  $("#question").text(currentQuestion.question);
  $("#answer1").text(currentQuestion.answerChoice1);
  $("#answer2").text(currentQuestion.answerChoice2);
  $("#answer3").text(currentQuestion.answerChoice3);
  $("#answer4").text(currentQuestion.answerChoice4);

  remainingQuestions.splice(questionIndex, 1);
}

function userInputListeners() {
  document.getElementById("nextBtn").addEventListener("click", (event) => {
    if (answerInput) {
      checkUserAnswer(userAnswer, currentQuestion.answer);
    }
  });

  document
    .getElementById("answer1")
    .addEventListener("click", function (event) {
      console.log("event.target.innerText: ", event.target.innerText);
      console.log("event.target.dataset: ", event.target.dataset.number);
      userAnswer = parseInt(event.target.dataset.number);
      if (!answerInput) {
        answerInput = true;
      }
      console.log("userAnswer: ", userAnswer);
    });
  document
    .getElementById("answer2")
    .addEventListener("click", function (event) {
      console.log("event.target.innerText: ", event.target.innerText);
      console.log("event.target.dataset: ", event.target.dataset.number);
      userAnswer = parseInt(event.target.dataset.number);
      if (!answerInput) {
        answerInput = true;
      }
      console.log("userAnswer: ", userAnswer);
    });

  document
    .getElementById("answer3")
    .addEventListener("click", function (event) {
      console.log("event.target.innerText: ", event.target.innerText);
      console.log("event.target.dataset: ", event.target.dataset.number);
      userAnswer = parseInt(event.target.dataset.number);
      if (!answerInput) {
        answerInput = true;
      }
      console.log("userAnswer: ", userAnswer);
    });
  document
    .getElementById("answer4")
    .addEventListener("click", function (event) {
      console.log("event.target.innerText: ", event.target.innerText);
      console.log("event.target.dataset: ", event.target.dataset.number);
      userAnswer = parseInt(event.target.dataset.number);
      if (!answerInput) {
        answerInput = true;
      }
      console.log("userAnswer: ", userAnswer);
    });
}

// TODO
// when the user is on the last question
// change next button to submit button
// submit function // when timer runs out or when submit button is clicked
// calculate score
// hide modal contents
// ex questions, answers, correct/wrong, timer
// display score
// if the answer is correct add 4 seconds to the timer
// if the asnwer is wrong subtract 2 seconds from the timer
