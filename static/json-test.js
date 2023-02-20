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

// Prompt user to confirm they want to leave lesson
// window.onbeforeunload = function() {
//     return "Lesson progress will be lost if you leave the page, are you sure?";
//   };


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
    document.getElementById("points-and-lives").style.display = "block";
    document.getElementById("question-and-answer").style.display = "block";
    document.getElementById("navigate-and-info").style.display = "block";
    showQuestion()
}

// Show each question
function showQuestion() {
    document.getElementById("show-next-question").style.display = "none";
    document.getElementById("correct-answer").style.display = "none";
    document.getElementById("incorrect-answer").style.display = "none";
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

function showMultiChoice(currentQuestion) {
    let questionOptions = currentQuestion["options"];
    for (let i = 0; i < questionOptions.length; i++) {
        const buttonID = "multi-choice-btn" + i;
        const button = document.getElementById(buttonID);
        button.disabled = false;
        button.style.color = "black"; // TODO: UPDATE
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

function checkMultiChoiceAnswer(chosenAnswer) {
    document.getElementById("show-next-question").style.display = "block";
    document.getElementById(correctMultiChoiceAnswer).style.color = "green";
    
    for (i = 0; i <= 9; i++) {
        // const buttonID = "multi-choice-btn" + i;
        document.getElementById("multi-choice-btn" + i).disabled = true;
    }

    if (chosenAnswer == correctMultiChoiceAnswer) {
        document.getElementById("correct-answer").style.display = "block";
        addOrRemovePoints(true)
    } else {
        document.getElementById("incorrect-answer").style.display = "block";
        document.getElementById(chosenAnswer).style.color = "red";
        addOrRemoveLives(false)
        addOrRemovePoints(false)
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
function updatePoints() {
    document.getElementById("your-points").innerHTML = "Your Points: " + pointCounter + "/100"
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
function updateLives() {
    document.getElementById("your-lives").innerHTML = "Your lives: " + lives;
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