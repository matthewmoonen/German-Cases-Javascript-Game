/* 
Declare globally used variables:
    • Number of lives at beginning of round
    • Number of points rewarded/lost for correct/incorrect answers
    • Count of current question number
    • etc.
*/

var lives;
var posPointAggregate;
var negPointAggregate;
var currentQuestionNumber = 0;
const pointsToWin = 100;
var pointCounter = 0;
var correctMultiChoiceAnswer;
var currentlySelectedMultiChoiceAnswer = "submit-btn";




// !!!!!!!!!!!!!!!!!!!!!! UPDATE THIS WHEN GOING LIVE
// Prompt user to confirm they want to leave lesson
// window.onbeforeunload = function() {
//     return "Lesson progress will be lost if you leave the page, are you sure?";
//   };


var bodyStyles = window.getComputedStyle(document.body);
var text100 = bodyStyles.getPropertyValue('--text100');
var text80 = bodyStyles.getPropertyValue('--text80');
var text60 = bodyStyles.getPropertyValue('--text60');
var text40 = bodyStyles.getPropertyValue('--text40');
var text20 = bodyStyles.getPropertyValue('--text20');
var secondaryColour = bodyStyles.getPropertyValue('--secondarycolour')
var secondaryColourFaded = bodyStyles.getPropertyValue('--secondarycolourfaded')
var lessonBackground = bodyStyles.getPropertyValue('--lessonbackground')
var backgroundColour = bodyStyles.getPropertyValue('--backgroundcolour')
var winColour = bodyStyles.getPropertyValue('--wincolour')
var loseColour = bodyStyles.getPropertyValue('--losecolour')

// Move answer section in/out of "card" box based on size of window
window.onresize = moveAnswerSectionMobile;
window.onload = moveAnswerSectionMobile;
function moveAnswerSectionMobile() {
if($(window).width() < 700){
    $('#answer-section').appendTo('#mobile-answer-section');
  } else {
    $('#answer-section').appendTo('#card-content');
  }
}



// Declare lesson content as global variable and request as JSON
let lessonContent;
async function fetchlessonContentJSON() {
    const response = await fetch('/lesson');
    const lesson = await response.json();
    return lesson;
}
fetchlessonContentJSON().then(lesson => {
    // Update above declared lesson variables as per information from JSON.
    // Update HTML to display content relevant to current lesson.
    lessonContent = lesson;
    document.getElementById("begin").style.display = "block";
    const lessonTitle = lessonContent[0]["lessonTitle"]
    document.getElementById("lesson-title").innerHTML = lessonTitle
    document.getElementById("page-title").textContent = "Matthew Moonen - " + lessonTitle;
    
    posPointAggregate = lessonContent[0]["posPointAggregate"];
    negPointAggregate = lessonContent[0]["negPointAggregate"];
    lives = lessonContent[0]["lives"];
});



// Show start page
function begin() {
    updateLives()
    updatePoints()
    document.getElementById("begin").style.display = "none";
    document.getElementById("lesson-content").style.display = "block";
    showQuestion()
}


function updateLives() {
    document.getElementById("player-health").innerHTML = lives;
}

function updatePoints() {
    document.getElementById("player-points").innerHTML = pointCounter + "/100"
}

// Show each question
function showQuestion() {
    
    let submitButtonStyle = document.getElementById("submit-btn");
    submitButtonStyle.style.color = lessonBackground;
    submitButtonStyle.style.borderColor = lessonBackground;
    submitButtonStyle.style.backgroundColor = backgroundColour;

    document.getElementById("answer-result").style.display = "none";
    if (currentQuestionNumber == lessonContent.length - 1) {
        currentQuestionNumber = 1;
    } else {
        currentQuestionNumber += 1;
    }
    const currentQuestion = lessonContent[currentQuestionNumber]
    document.getElementById("question-instructions").innerHTML = currentQuestion["instructions"]
    document.getElementById("the-question").innerHTML = currentQuestion["question"];
    document.getElementById("english-translation").innerHTML = currentQuestion["english"]
    if (currentQuestion["type"] === "multiChoice") {
        showMultiChoice(currentQuestion)
    }
}

// Show multi-choice buttons if question type is multi-choice
function showMultiChoice(currentQuestion) {
    let questionOptions = currentQuestion["options"];
    for (let i = 0; i < questionOptions.length; i++) {
        const buttonID = "multi-choice-btn" + i;
        const button = document.getElementById(buttonID);
        button.disabled = false;
        button.style.color = text100;
        button.style.backgroundColor = lessonBackground;
        button.style.borderColor = text60;
        button.innerText = questionOptions[i][0];
        button.style.display = "block";
        if (questionOptions[i][1] == true) {
            correctMultiChoiceAnswer = buttonID
        }
    }
    for (let i = questionOptions.length; i <= 9; i++) {
        const buttonID = "multi-choice-btn" + i;
        document.getElementById(buttonID).style.display = "none";
    }
}


document.getElementById("submit-btn").addEventListener("click", function() {
    userSubmitAnswer(currentlySelectedMultiChoiceAnswer);
}
)

function multiChoiceAnswerSelected(chosenAnswer) {
    currentlySelectedMultiChoiceAnswer = chosenAnswer

    for (i = 0; i < 10; i++) {
        const buttonID = "multi-choice-btn" + i;
        const button = document.getElementById(buttonID);
        button.style.color = text100;
        // button.style.backgroundColor = lessonBackground;
        button.style.borderColor = text60;
    }


    let chosenButton = document.getElementById(chosenAnswer)
    chosenButton.style.color = secondaryColour;
    chosenButton.style.borderColor = secondaryColour;

    let submitButtonStyle = document.getElementById("submit-btn");
    submitButtonStyle.style.backgroundColor = secondaryColour;
    submitButtonStyle.style.color = text100;
    submitButtonStyle.style.borderColor = text60;
}




function multiChoiceAnswerSubmitted(multiChoiceResult) {
    for (let i = 0; i < 10; i++) {
        const buttonID = "multi-choice-btn" + i;
        const button = document.getElementById(buttonID);
        button.disabled = true;
        button.style.color = text20;
        button.style.borderColor = text20;
    }

    document.getElementById("submit-btn").innerText = "Next Question";
    document.getElementById(correctMultiChoiceAnswer).style.color = winColour;
    document.getElementById(correctMultiChoiceAnswer).style.borderColor = winColour;

    if (multiChoiceResult === true) {

        console.log('true')
    }

    if (multiChoiceResult === false) {
        document.getElementById(currentlySelectedMultiChoiceAnswer).style.color = loseColour;
        document.getElementById(currentlySelectedMultiChoiceAnswer).style.borderColor = loseColour;
    }

}


function userSubmitAnswer(userAnswer) {
    if (userAnswer !== "submit-btn") {
        if (currentlySelectedMultiChoiceAnswer === correctMultiChoiceAnswer) {
            currentlySelectedMultiChoiceAnswer = "next-question";
            addOrRemovePoints(true)
            multiChoiceAnswerSubmitted(true)

        } else if (currentlySelectedMultiChoiceAnswer === "next-question") {
            currentlySelectedMultiChoiceAnswer = "submit-btn"
            document.getElementById("submit-btn").innerText = "Submit Answer"
            showQuestion();
        } else {
            addOrRemovePoints(false)
            addOrRemoveLives(false)
            multiChoiceAnswerSubmitted(false)
            currentlySelectedMultiChoiceAnswer = "next-question";
        }
    }
    else {
        console.log('nothing selected')
    }
}


function addOrRemovePoints(aggregate) {
    if (aggregate === true) {
        pointCounter += posPointAggregate;
    } else if (aggregate === false && pointCounter > negPointAggregate) {
        pointCounter -= negPointAggregate;
    } else {
        pointCounter = 0;
    }
    updatePoints()
    if (pointCounter >= pointsToWin) {
        gameOver(true)
    }
}


function addOrRemoveLives(addOrRemove) {
    if (addOrRemove == false) {
        lives -= 1;
    }
    else {
        lives += 1;
    }
    updateLives()
    if (lives === 0) {
        gameOver(false)
    }
}


function gameOver(winOrLose) {
    document.getElementById("question-and-answer").style.display = "none";
    document.getElementById("correct-answer").style.display = "none";
    document.getElementById("incorrect-answer").style.display = "none";
    document.getElementById("show-result").style.display = "block";

    if (winOrLose == true) {
        document.getElementById("your-result").innerHTML = "<h1>Game Over</h1><p>You won!!!</p>"
    }
    else {
        document.getElementById("your-result").innerHTML = "<h1>Game Over</h1><p>Sorry, you lost :(</p>"
    }
}