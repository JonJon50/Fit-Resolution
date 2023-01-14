let startBtn = document.querySelector(".start-btn")
let mainSection = document.querySelector(".section")
let questionsArea = document.querySelector(".questions-box")
let questionsText = document.querySelector(".questions-area")
let answerTextOne = document.querySelector(".answer-area1")
let answerTextTwo = document.querySelector(".answer-area2")
let answerBtn = document.querySelector(".answer")
let buttonAbout = document.querySelector(".about")
let aboutSection= document.querySelector(".para")
let buttonContact = document.querySelector(".contact")
let contactSection= document.querySelector(".footer")
let homeSection= document.querySelector(".home")
let paragraphSection= document.querySelector(".title")

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
question: "which of the following would you be most interested in trying?",
answer1: "Mobility, flexibility and alternative workouts",
answer2: "Endurance & weight lifting",
    }
];


startBtn.addEventListener('click', function () {
 startQuestions()
})

function startQuestions (){
    questionsArea.classList.remove("is-hidden")
    mainSection.classList.add("is-hidden")

if(questionsIndex === questions.length){
    endQuestions()
} else {
    questionsText.innerHTML = questions[questionsIndex].question;
    answerTextOne.innerHTML = questions[questionsIndex].answer1;
    answerTextTwo.innerHTML = questions[questionsIndex].answer2;
}
}

function confirmAnswer(answer){
    let usersAnswer = questions[questionsIndex];

    if(answer === usersAnswer.answer1){
        questionsIndex++;
        startQuestions()
    }
    else if (answer !== usersAnswer.answer1);
}



answerBtn.addEventListener("click", (event) => {
const answer = event.target.innerText;
confirmAnswer(answer);

}
)


// function addCity(){
//   fetch('https://www.google.com/maps/search/?AIzaSyD7rYxTk62ICY-DiZAbLMVTzJZgPiWQ0YI=1')
//     .then(function (response) {
//       return response.json();
//       console.log("123");
//     })
    
  // };
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'dfbd975756msh5c34e78571a6059p156249jsne62ed8b440fa',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
      };
      
      fetch('https://exercisedb.p.rapidapi.com/exercises', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));

   // added nav bar button eventlistener to about-home-contact
           buttonAbout.addEventListener('click', function () {
           mainSection.classList.add("is-hidden") 
           aboutSection.classList.remove("is-hidden")
           questionsArea.classList.add("is-hidden") 
      })

           buttonContact.addEventListener('click', function () {
           mainSection.classList.add("is-hidden") 
           contactSection.classList.remove("is-hidden") 
      })

           buttonHome.addEventListener('click', function () {
           mainSection.classList.remove("is-hidden") 
      })   
           buttonHome.addEventListener('click', function () {
           paragraphSection.classList.remove("is-hidden") 
      })   


     

