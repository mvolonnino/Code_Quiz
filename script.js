// Links to the start button that will play the game
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var answerChoices = Array.from(
  document.getElementsByClassName("answer-choices")
);

var currentQuestion = {};
var answerInput = false;
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
  {
    question: "What is Hawkeye's first name?",
    answerChoice1: "Steve",
    answerChoice2: "Clint",
    answerChoice3: "Coleman",
    answerChoice4: "Bruce",
    answer: 2,
  },
  {
    question: "Who is the God of Thunder?",
    answerChoice1: "Thor",
    answerChoice2: "Loki",
    answerChoice3: "Odin",
    answerChoice4: "Heimdall",
    answer: 1,
  },
  {
    question: "Where is Peter Parker from?",
    answerChoice1: "Brooklyn",
    answerChoice2: "Staten Island",
    answerChoice3: "Manhattan",
    answerChoice4: "Queens",
    answer: 4,
  },
  {
    question: "Who is Natasha Romanov?",
    answerChoice1: "Scarlet Witch",
    answerChoice2: "Black Widow",
    answerChoice3: "Peggy Carter",
    answerChoice4: "Valkryie",
    answer: 2,
  },
  {
    question: "Who is the God of Mischeif?",
    answerChoice1: "Thor",
    answerChoice2: "Starlord",
    answerChoice3: "Loki",
    answerChoice4: "Odin",
    answer: 3,
  },
  {
    question: "Which is the first 'Infinity Stone' to show up in the MCU?",
    answerChoice1: "Power Stone",
    answerChoice2: "Mind Stone",
    answerChoice3: "Time Stone",
    answerChoice4: "Space Stone",
    answer: 4,
  },
  {
    question: "What is Captain America's sheild made out of?",
    answerChoice1: "Aluminum",
    answerChoice2: "Adamantium",
    answerChoice3: "Vibranium",
    answerChoice4: "Uranium",
    answer: 3,
  },
  {
    question: "Who is Gamora's sister?",
    answerChoice1: "Aurora",
    answerChoice2: "Nebula",
    answerChoice3: "Asteroid",
    answerChoice4: "Mantis",
    answer: 2,
  },
  {
    question: "Which Chris plays Star-Lord?",
    answerChoice1: "Chris Hemsworth",
    answerChoice2: "Chris Evans",
    answerChoice3: "Chris Pratt",
    answerChoice4: "Chris Pine",
    answer: 3,
  },
  {
    question: "Who is Ant-Man in the MCU?",
    answerChoice1: "Scott Lang",
    answerChoice2: "Hank Pym",
    answerChoice3: "Peter Parker",
    answerChoice4: "Steve Rodgers",
    answer: 1,
  },
  {
    question:
      "Who was the first to yeild the Infinity Gauntlet with all the stones?",
    answerChoice1: "Iron Man",
    answerChoice2: "Hulk",
    answerChoice3: "Thor",
    answerChoice4: "Thanos",
    answer: 4,
  },
  {
    question: "Where was Thanos' home world?",
    answerChoice1: "Pluto",
    answerChoice2: "Titan",
    answerChoice3: "Saturn",
    answerChoice4: "Nvidelir",
    answer: 2,
  },
  {
    question: "What is Black Panther's real name?",
    answerChoice1: "N'Jadaka",
    answerChoice2: "T'Challa",
    answerChoice3: "Zuri",
    answerChoice4: "T'Chaka",
    answer: 2,
  },
  {
    question: "Who is Captain America's best friend?",
    answerChoice1: "Steve Rodgers",
    answerChoice2: "Tony Stark",
    answerChoice3: "Sam Wilson",
    answerChoice4: "Bucky Barnes",
    answer: 4,
  },
  {
    question: "What is Agent Coulson's first name?",
    answerChoice1: "Happy",
    answerChoice2: "Phil",
    answerChoice3: "Nick",
    answerChoice4: "Paul",
    answer: 2,
  },
];
console.log("this is how many questions we have: ", gameQuestions);

$(".close").on("click", function (event) {
  timer = timer;
  clearTimeout(gameTimer);
  console.log("this is remaining question: ", remainingQuestions);
  $("#start-button").text("Continue Game");
});

// Event listener to know when the user wants to startGame()
var startButtonElement = document.getElementById("start-button");
if (startButtonElement) {
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      startGame();
    });
}

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
    var correct = $("#question-answer").text("Correct!");
    correct.attr("style", "color:green");
    $("#question-answer").show();
  } else {
    timer = timer - 2;
    var wrong = $("#question-answer").text("Wrong!");
    wrong.attr("style", "color:red");
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

// Function that changes submit button to go back to homepage button
// function showTakeQuizBtn() {
//   $("#submitedName").show();
//   document.getElementById("submitName").addEventListener("click", (event) => {
//     // var homeBtn = document.getElementById("submitName");
//     // console.log("homeBtn ", event.target);
//     // homeBtn.href = "./index.html";
//   });
// }
//Function to take the submit btn that we created when remaining questions = 0 and converts btn back to a nxt btn
// function createNextBtn() {
//   $("#nextBtn").text("Next");
//   $("#closeBtn").on("click", function (event) {
//     var nextBtnClose = $("#nextBtn");
//     console.log("nextbtn clicked: ", nextBtnClose);
//     // nextBtnClose.attr("href", "./index.html");
//   });
// }
// Function that resets game variables back to global when the "x" btn is clicked in modal

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
  var storageArray = [];
  var username = $("#name").val();
  var userHighScore = getUserHighScore();
  var userObject = {
    username: username,
    highscore: userHighScore,
  };
  storageArray = JSON.parse(localStorage.getItem("userObject")) || [];
  storageArray.push(userObject);
  localStorage.setItem("userObject", JSON.stringify(storageArray));

  // createHomeButton();
  printHighScores(storageArray);
}

// function that prints scores to screen
function printHighScores(storageArray) {
  console.log("storageArray: ", storageArray);

  // forEach through storageArray create your list
  storageArray.forEach(function (userObject) {
    console.log("userObject ", userObject);
    var liElement = document.createElement("li");
    liElement.textContent = userObject.username + " - " + userObject.highscore;
    var uLElement = $("#list");
    uLElement.prepend(liElement);
  });
}

function getUserHighScore() {
  var userHighScore = localStorage.getItem("highscore");

  return userHighScore;
}
var highscoreElement = document.getElementById("highscore");
if (highscoreElement) {
  var userHighScore = getUserHighScore();
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
