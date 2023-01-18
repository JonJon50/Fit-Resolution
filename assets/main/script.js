//buttons
let startBtn = document.querySelector(".start-btn")
let answerBtn = document.querySelectorAll(".answer")
let aboutBtn = document.querySelector(".about")
let homeBtn= document.querySelector(".home")
let contactBtn = document.querySelector(".contact")
let gymBtn = document.querySelector(".gymbtn")
let workoutBtn = document.querySelector(".workoutbtn")
//buttons

//sections
let aboutSection = document.querySelector(".about-us")
let mainSection = document.querySelector(".main-section")
let questionsSection = document.querySelector(".questions-area")
let contactSection= document.querySelector(".contact-section")
let questionsArea = document.querySelector(".questions-box")



let answerTextOne = document.querySelector(".answer-area1")
let answerTextTwo = document.querySelector(".answer-area2")
let paragraphSection= document.querySelector(".title")

let homeSelect = document.querySelector(".homeworkout")
let gymSelect = document.querySelector(".gym")



let quizCategory1= 0;
let quizCategory2= 0;

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
    questionsSection.innerHTML = questions[questionsIndex].question;
    answerTextOne.innerHTML = questions[questionsIndex].answer1;
    answerTextTwo.innerHTML = questions[questionsIndex].answer2;
}
}

function confirmAnswer(answer){
    let usersAnswer = questions[questionsIndex];

    if(answer === usersAnswer.answer1){
        quizCategory1++;
            
    }
    else if (answer === usersAnswer.answer2){
        quizCategory2++;
       
    };
     questionsIndex++;
        startQuestions()
}


for (let i = 0; i < answerBtn.length; i++) {
    answerBtn[i].addEventListener("click", (event) => {
        const answer = event.target.innerText;
        confirmAnswer(answer);
        
        }
        )  
}


function endQuestions() {

    questionsArea.classList.add("is-hidden")
    mainSection.classList.add("is-hidden")
    

    if (quizCategory1 >= 4){
        homeSelect.classList.remove("is-hidden")

    }
    else {
        gymSelect.classList.remove("is-hidden")
    }

}

gymBtn.addEventListener('click', function (){
    window.location.href="maps.html"
startQuestions()
})

workoutBtn.addEventListener('click', function (){
    window.location.href="exercise.html"
startQuestions()
})



//    added nav bar button eventlistener to about-home-contact
           aboutBtn.addEventListener('click', function () {
           aboutSection.classList.remove("is-hidden")
            mainSection.classList.add("is-hidden") 
           questionsArea.classList.add("is-hidden")
           homeSelect.classList.add("is-hidden")
           gymSelect.classList.add("is-hidden")
           contactSection.classList.add("is-hidden")
      })

           contactBtn.addEventListener('click', function () {
           aboutSection.classList.add("is-hidden") 
           mainSection.classList.add("is-hidden")
           questionsArea.classList.add("is-hidden")
           homeSelect.classList.add("is-hidden")
           gymSelect.classList.add("is-hidden")
           contactSection.classList.remove("is-hidden")
      })

           homeBtn.addEventListener('click', function () {
            aboutSection.classList.add("is-hidden") 
            questionsArea.classList.add("is-hidden") 
            mainSection.classList.remove("is-hidden")
            homeSelect.classList.add("is-hidden")
            gymSelect.classList.add("is-hidden") 
            contactSection.classList.add("is-hidden")
      })   



     

