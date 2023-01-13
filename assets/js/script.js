let startBtn = document.querySelector(".start-btn")
let mainSection = document.querySelector(".section")

startBtn.addEventListener('click', function () {
 startQuestions()

})

function startQuestions (){
    mainSection.classList.add("is-hidden")
}