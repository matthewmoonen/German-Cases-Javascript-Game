
// Variables to be updated dynamically in future update that includes multiple lessons.
const lessonTitle = "Masculine Nominative and Accusitive"
// const totalQuestions = ""
// REMOVE
const questionCount = 10
let correctAnswer = 1


// Variables that will be updated by the above.
document.getElementById("lesson-title").innerHTML = lessonTitle;
document.getElementById("question-total-number").innerHTML = questionCount;






let idOfCorrectAnswer = "btn6"
let scoreCounter = 0
let lives = 5

document.getElementById("lives").innerHTML = lives;
let currentQuestionNumber = 1



function checkAnswer(theId) {
    if (theId == idOfCorrectAnswer) {
        handleResult(true)
    } else {
        handleResult(false)
    }
}

function handleResult(isCorrect) {
    document.getElementById("result-section").style.display = "block";
    document.getElementById("answer-section").style.display = "none";
    document.getElementById("next-question").style.display = "block";
    
    if (currentQuestionNumber == questionCount && isCorrect == true) {
        gameOver(true)
    }

    if (isCorrect == true) {
        document.getElementById("result-heading").innerHTML = "Genau! 😊";
        document.getElementById("result-body").innerHTML = "Sehr gut gemacht!";
        scoreCounter += 1;
        document.getElementById("score").innerHTML = scoreCounter;
        document.getElementById("result-section").style.backgroundColor = "#228b22"
        
        
    } else {
        document.getElementById("result-heading").innerHTML = "Nein 🙁";
        document.getElementById("result-body").innerHTML = "Deine Antwort ist leider falsch.";
        document.getElementById("result-section").style.backgroundColor = "#8b2222"
        lives -= 1;
        if (lives == 0)  {
            gameOver(false)
        }
        document.getElementById("lives").innerHTML = lives;
    }
}


function nextQuestion() {
    document.getElementById("answer-section").style.display = "block";
    document.getElementById("result-section").style.display = "none";
    document.getElementById("next-question").style.display = "none";

    currentQuestionNumber += 1;
    document.getElementById("current-question-number").innerHTML = currentQuestionNumber;
}

function gameOver(endResult) {
    document.getElementById("answer-section").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("your-lives").style.display = "none";
    document.getElementById("question-number").style.display = "none";
    document.getElementById("game-over").style.display = "block";
    document.getElementById("result-section").style.display = "none";
    document.getElementById("next-question").style.display = "none";
    
    if (endResult == true) {
        document.getElementById("game-over-lost").style.display = "none";
        
    } else {
        document.getElementById("game-over-won").style.display = "none";
    }

}
