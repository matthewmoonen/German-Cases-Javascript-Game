const winclr = "green"
const loseclr = "red"

function flipgood() {
    // document.getElementById("asdf").style = "background: green;"

    document.getElementById("my__border").style = "border-color: green; -webkit-transition: border-color 100ms linear; -ms-transition: border-color 100ms linear; transition: border-color 100ms linear;"
    // bordergood()

    flip()
}

function bordergood() {
    const border = document.getElementById("my__border");
    border.style = "border-color: green"
    // border.style.transform = "border-color 100ms linear"
}

function flipbad() {
    // document.getElementById("asdf").style = "background: red;"
    document.getElementById("my__border").style = "border-color: red; -webkit-transition: border-color 200ms linear; -ms-transition: border-color 200ms linear; transition: border-color 200ms linear;"
    flip()
}

function flip() {
    document.getElementById("card__content").style.transform = "rotateX(-0.5turn)"; 
    document.getElementById("card__content").style.transform = "rotateX(-0.5turn)"; 
    
}
function flipback() {
    document.getElementById("card__content").style.transform = "rotateX(0turn)"; 
    // document.getElementById("asdf").style = "background: black;"
    document.getElementById("my__border").style = "border-color: #333; -webkit-transition: border-color 100ms linear; -ms-transition: border-color 100ms linear; transition: border-color 100ms linear;"

}

// // document.getElementById("submit-answer").click()

// const btn = document.querySelector("submit-answer")
// btn.classList.add("active");


// const test =  document.querySelector(".card")
// const test1 = document.querySelector(".card__content")
// const btn = document.querySelector(".submit-button")
// btn.addEventListener('click', ()=>{
//   test.style.transform = "rotateX(.5turn)";
//    test1.style.transform = "rotateX(.5turn)";
   
//     // test.style.backgroundColor="red";
//    btn.classList.add('active');
// });
// document.getElementById("submit-button").click();


// function myFunction() {
//     // document.getElementById
    
//     // document.getElementById("card").style.msTransform = "rotateX(.5turn)"; // IE9 
//     // document.getElementById("card").style.transform = "rotateX(.5turn)"; 
//     // document.getElementById("card-content").style.msTransform = "rotateX(.5turn)"; // IE9 
//     document.getElementById("card-content").style.transform = "rotateX(.5turn)"; 
//   }






// const submitButton = document.getElementById("submit-button")

// const flippity = document.getElementById("card-content")


// submitButton.addEventListener('click', ()=> {
//     // flippity.style.transform = "rotateX(.5turn)";
//     flippity.classList.add("active");
// });




// const letsSumbit = document.querySelector(".card__content")
// const btn = document.querySelectorAll(".submit-button")

// btn.addEventListener('click', ()=>{
//     letsSumbit.getElementsByClassName.style.transform = "rotateX(.5turn)";
//     btn.classList.add("active");
// })
// document.getElementById("submit-button").click()








// 14aea1
// 1cfae7
// 413230
// 2b2121