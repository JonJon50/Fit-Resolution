let startBtn = document.querySelector(".start-btn");
let mainSection = document.querySelector(".section");
let questionsArea = document.querySelector(".questions-box");
let questionsText = document.querySelector(".questions-area");
let answerTextOne = document.querySelector(".answer-area1");
let answerTextTwo = document.querySelector(".answer-area2");
let answerBtn = document.querySelector(".answer");

let questionsIndex = 0;

let questions = [
  {
    question: "How would you describe your current fitness level?",
    answer1: "Beginning of my journey",
    answer2: "Somewhat active",
  },
  {
    question: "What is your biggest fitness struggle right now?",
    answer1: "Scheduling my workouts",
    answer2: "Support and accountability",
  },
  {
    question: "What inspires you to workout?",
    answer1: "Taking care of myself",
    answer2: "Reaching my peak performance",
  },
  {
    question: "What is your primary fitness goal?",
    answer1: "Stay healthy",
    answer2: "Get stronger",
  },
  {
    question: "What quote do you relate to most?",
    answer1: "You're only one workout away from a good mood - Unknown",
    answer2: "The body achieves what the mind believes - Unknown",
  },
  {
    question: "Which of the following would you be most interested in trying?",
    answer1: "Mobility, flexibility and alternative workouts",
    answer2: "Endurance & weight lifting",
  },
];

startBtn.addEventListener("click", function () {
  startQuestions();
});

function startQuestions() {
  questionsArea.classList.remove("is-hidden");
  mainSection.classList.add("is-hidden");

  if (questionsIndex === questions.length) {
    endQuestions();
  } else {
    questionsText.innerHTML = questions[questionsIndex].question;
    answerTextOne.innerHTML = questions[questionsIndex].answer1;
    answerTextTwo.innerHTML = questions[questionsIndex].answer2;
  }
}

function confirmAnswer(answer) {
  let usersAnswer = questions[questionsIndex];

  if (answer === usersAnswer.answer1) {
    questionsIndex++;
    startQuestions();
  } else if (answer !== usersAnswer.answer1);
}

answerBtn.addEventListener("click", (event) => {
  const answer = event.target.innerText;
  confirmAnswer(answer);
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dfbd975756msh5c34e78571a6059p156249jsne62ed8b440fa",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

fetch("https://exercisedb.p.rapidapi.com/exercises", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

  function showExercise(){
    
  }