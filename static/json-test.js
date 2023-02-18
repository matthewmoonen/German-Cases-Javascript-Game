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
// var currentQuestion
var currentQuestionNumber = 0;
const pointsToWin = 100;
var pointCounter = 0;
var correctMultiChoiceAnswer;


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
    posPointAggregate = lessonContent[0]["posPointAggregate"]
    negPointAggregate = lessonContent[0]["negPointAggregate"]
    lives = lessonContent[0]["lives"]
});


// Show start page
function begin() {
    document.getElementById("begin").style.display = "none";
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
    document.getElementById("the-question").innerHTML = currentQuestion["question"];
    if (currentQuestion["type"] === "multiChoice") {
        showMultiChoice(currentQuestion)
    }
}

function showMultiChoice(currentQuestion) {
    console.log(currentQuestion)
    let questionOptions = currentQuestion["options"];
    for (let i = 0; i < questionOptions.length; i++) {
        const buttonID = "multi-choice-btn" + i;
        const button = document.getElementById(buttonID);
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

function addOrRemovePoints(aggregate) {
    if (aggregate === false) {
        
    }
}