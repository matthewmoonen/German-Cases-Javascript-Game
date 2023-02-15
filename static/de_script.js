// Variables to be updated dynamically in future update that includes multiple lessons.
const lessonTitle = "Masculine Nominative and Accusitive"
// const totalQuestions = ""
// REMOVE
const pointsToWin = 100

let correctAnswer = 1

// Variables that will be updated by the above.
document.getElementById("lesson-title").innerHTML = lessonTitle;


let posPointAggregate = 10
let negPointAggregate = 4


let idOfCorrectAnswer = "btn1"
let pointCounter = 0
let lives = 5

let currentQuestion = "What is the air speed velocity of an unladen swallow"


document.getElementById("lives").innerHTML = lives;
let currentQuestionNumber = 1

function checkAnswer(theId) {
    
    if (theId == idOfCorrectAnswer) {
        
        handleResult(true, theId)

    } else {
        handleResult(false, theId)
    }
    
}

function handleResult(isCorrect, chosenId) {
    
    document.getElementById("result-section").style.display = "block";

    // TODO: make buttons non-clickable after answer has been chosen

    // document.getElementById("answer-section").style.display = "none";
    
    

    document.getElementById("next-question").style.display = "block";


    if (isCorrect == true) {
        document.getElementById("result-heading").innerHTML = "Genau! 😊";
        document.getElementById("result-body").innerHTML = "Sehr gut gemacht!";
        document.getElementById(idOfCorrectAnswer).style.backgroundColor = "#228b22";
        pointCounter += posPointAggregate;
        if (pointCounter >= pointsToWin) {
            gameOver(true)
        }
        document.getElementById("result-section").style.backgroundColor = "#228b22";
        
        
    } else {
        document.getElementById("result-heading").innerHTML = "Nein 🙁";
        document.getElementById("result-body").innerHTML = "Deine Antwort ist leider falsch.";
        document.getElementById("result-section").style.backgroundColor = "#8b2222";
        document.getElementById(chosenId).style.backgroundColor = "#8b2222";
        document.getElementById(idOfCorrectAnswer).style.backgroundColor = "#228b22";
        lives -= 1;
        if (lives == 0)  {
            gameOver(false);
        }

        if (pointCounter > negPointAggregate) {
            pointCounter -= negPointAggregate;
        } else {
            pointCounter = 0;
        }
        
        document.getElementById("lives").innerHTML = lives;
    }
    document.getElementById("score").innerHTML = pointCounter;
    
}


function nextQuestion() {
    
    document.getElementById("answer-section").style.display = "block";
    document.getElementById("result-section").style.display = "none";
    document.getElementById("next-question").style.display = "none";
    document.getElementById("btn1").style.backgroundColor = "#008CBA";
    document.getElementById("btn2").style.backgroundColor = "#008CBA";
    document.getElementById("btn3").style.backgroundColor = "#008CBA";
    document.getElementById("btn4").style.backgroundColor = "#008CBA";
    document.getElementById("btn5").style.backgroundColor = "#008CBA";
    document.getElementById("btn6").style.backgroundColor = "#008CBA";
    document.getElementById("btn7").style.backgroundColor = "#008CBA";
    document.getElementById("btn8").style.backgroundColor = "#008CBA";
    currentQuestionNumber += 1;
}

function gameOver(endResult) {
    document.getElementById("answer-section").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("your-lives").style.display = "none";
    document.getElementById("game-over").style.display = "block";
    document.getElementById("result-section").style.display = "none";
    document.getElementById("next-question").style.display = "none";
    
    if (endResult == true) {
        document.getElementById("game-over-heading").innerHTML = "Game Over ✨";
        document.getElementById("game-over-msg").innerHTML = "Wow! Du bist großartig!";
        document.getElementById("game").style.backgroundColor = "#228b22"
    } else {
        document.getElementById("game-over-msg").innerHTML = "Unfortunately, you ran out of lives. Better luck next time!";
        document.getElementById("game").style.backgroundColor = "#8b2222";
        document.getElementById('btn-play-again').innerText = 'Try Again';
    }
}
