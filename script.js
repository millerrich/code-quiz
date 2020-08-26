// click to start div
const start = document.getElementById("start");
// main quiz div set to display none initially
const quiz = document.getElementById("quiz");
// div for question to appear in
var question = document.getElementById("question");
// div for countdown timer
const counter = document.getElementById("counter");
// div for choices to answer question
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
// div to display if answer was correct or incorrect
const scoreContainer = document.getElementById("correctIncorrect");
// object containing question arrays
let questions = [
    {
        question : "DOM stands for what?",
        choiceA : "Document Object Model",
        choiceB : "Dirty Odor Monster",
        choiceC : "Direct Ordinance Master",
        choiceD : "Dish Of Meatballs",
        correct : choiceA
    },
    {
        question : "In javascript var stands for what?",
        choiceA : "Varsity",
        choiceB : "Varnish",
        choiceC : "Variable",
        choiceD : "Variety",
        correct : choiceC
    },
    {
        question : "Which symbol is an alias for jQuery?",
        choiceA : "*",
        choiceB : "#",
        choiceC : "&",
        choiceD : "$",
        correct : choiceD    },
    {
        question : "Where in the HTML document should you usually link your external Javascript file?",
        choiceA : "In the head",
        choiceB : "At the top of body section",
        choiceC : "At the bottom of the body section",
        choiceD : "Within the CSS link",
        correct : choiceC
    },
    {
        question : "What does HTML stand for?",
        choiceA : "Helpful Teacher Masking Laughter",
        choiceB : "Hyper Text Markup Language",
        choiceC : "Hello Today Make Lasagna",
        choiceD : "Head To Mask List",
        correct : "C"
    },
]
// styling elements


// event listener to start quiz on click
start.addEventListener("click", function() {
    start.style.display = "none";
    quiz.style.display = "block";
    countdown();
    addQuestions();

});

function countdown() {
    var timeLeft = 30;
  
    var timeInterval = setInterval(function() {
      counter.textContent = timeLeft;
      timeLeft--;
  
      if (timeLeft === 0) {
        counter.textContent = "";
        //insert call function for high score here
        alert("quiz over");
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }

var i = 0;
function addQuestions() {
    // for (var i = 0; i < questions.length; i++) {}
    question.innerText = questions[i].question
    choiceA.innerText = questions[i].choiceA
    choiceB.innerText = questions[i].choiceB
    choiceC.innerText = questions[i].choiceC
    choiceD.innerText = questions[i].choiceD
    
}



function checkAnswer() {
    alert("answer checked");
    i++;
    console.log(i);
    addQuestions();
    return
    
}
choiceA.addEventListener("click", function() {
    console.log("clicked A")
    checkAnswer();
});
choiceB.addEventListener("click", function() {
    console.log("clicked B")
    checkAnswer();
});
choiceC.addEventListener("click", function() {
    console.log("clicked C")
    checkAnswer();
});
choiceD.addEventListener("click", function() {
    console.log("clicked D")
    checkAnswer();
});
