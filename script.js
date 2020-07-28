// Links to the start button that will play the game
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
// var randomGameQuestions = 
console.log(randomGameQuestions);

startButton.addEventListener("click", gameStart);

function gameStart() {
  console.log("Game Started");
  questionContainer.textContent = "randomGameQuestions";
}

// Timer Function
var timer(){
  var timerCountdown = 20;
  for (var i = )
}
// Questions Array
var gameQuestions = [
  {
    question: "What is Iron Man's real name?",
    answer: {
      a: "Steve Rodgers",
      b: "Tony Stark",
      c: "Bruce Banner",
      d: "Robert Downey Jr.",
    },
    correct: "b",
  },
  {
    question:
      "Who is the strongest Avenger? *Hint: Answered in Thor: Ragnorak in the Quinjet*",
    answer: {
      a: "Thor",
      b: "Hawkeye",
      c: "Hulk",
      d: "Captain America",
    },
    correct: "c",
  },
  {
    question: "Who is the director of S.H.E.I.L.D.?",
    answer: {
      a: "Nick Fury",
      b: "Agent Coleman",
      c: "Steve Rodgers",
      d: "Peggy Carter",
    },
    correct: "a",
  },
  {
    question: "Which character turns into a big green monster when he gets angry?",
    answer: {
      a: "Black Panther",
      b: "Thor",
      c: "Hulk",
      d: "Black Widow",
    },
    correct: "c",
  },
  {

  }
];
