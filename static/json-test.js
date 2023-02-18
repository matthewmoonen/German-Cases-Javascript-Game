let currentQuestionNumber = 0;
// Declare questions as global variable
let questions;

let correctMultiChoiceAnswer;

// Request lesson questions and answers as JSON
async function fetchQuestionsJSON() {
    const response = await fetch('/lesson');
    const lesson = await response.json();
    return lesson;
}
fetchQuestionsJSON().then(lesson => {
    console.log(lesson);
    questions = lesson;
});



function begin() {
    document.getElementById("begin").style.display = "none";
    showQuestion()
}

function showQuestion() {

    document.getElementById("show-next-question").style.display = "none";
    document.getElementById("correct-answer").style.display = "none";
    document.getElementById("incorrect-answer").style.display = "none";
    if (currentQuestionNumber == questions.length - 1) {
        currentQuestionNumber = 1;
    } else {
        currentQuestionNumber += 1;
    }
    document.getElementById("the-question").innerHTML = questions[currentQuestionNumber]["question"];
    
    let questionOptions = questions[currentQuestionNumber]["options"];
    for (let i = 0; i < questionOptions.length; i++) {
        const buttonID = i;
        const button = document.getElementById(buttonID);
        button.style.color = "black";
        button.innerText = questionOptions[i][0];
        button.style.display = "block";
        if (questionOptions[i][1] == true) {
            correctMultiChoiceAnswer = buttonID
        }
    }
    for (let i = questionOptions.length; i <= 9; i++) {
        let buttonID = i;
        document.getElementById(buttonID).style.display = "none";
    }

}

function checkAnswer(chosenAnswer) {
    document.getElementById("show-next-question").style.display = "block";
    document.getElementById(correctMultiChoiceAnswer).style.color = "green";
    if (chosenAnswer == correctMultiChoiceAnswer) {
        document.getElementById("correct-answer").style.display = "block";
    } else {
        document.getElementById("incorrect-answer").style.display = "block";
        document.getElementById(chosenAnswer).style.color = "red";
    }
}

