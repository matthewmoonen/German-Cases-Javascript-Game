let currentQuestionNumber = 0;
let questions;

async function fetchQuestionsJSON() {
    const response = await fetch('/lesson');
    const lesson = await response.json();
    return lesson;
}
fetchQuestionsJSON().then(lesson => {
    console.log(lesson);
    questions = lesson;
});

const questionButtonClicked = document.getElementById("show-question")
questionButtonClicked.addEventListener("click", () => { showQuestion(), false })

const answerButtonClicked = document.getElementById("show-answer")
answerButtonClicked.addEventListener("click", () => { showAnswer(), false })

function showQuestion() {
    if (currentQuestionNumber == questions.length - 2) {
        currentQuestionNumber = 1
    } else {
        currentQuestionNumber += 1;
    }
    document.getElementById("the-question").innerHTML = questions[currentQuestionNumber]["question"];
    document.getElementById("the-answer").innerHTML = "";

}

function showAnswer() {
    document.getElementById("the-answer").innerHTML = questions[currentQuestionNumber]["answer"];
}



