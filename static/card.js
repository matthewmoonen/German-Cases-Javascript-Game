

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
