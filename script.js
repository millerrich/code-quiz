// click to start div
const start = document.getElementById("start");
// main quiz div set to display none initially
const quiz = document.getElementById("quiz");
// div for question to appear in
var question = document.getElementById("question");
// div for countdown timer
var counter = document.getElementById("counter");
// div for choices to answer question
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
// set value for each button
// div to display if answer was correct or incorrect
var highScore = document.getElementById("highScore");
var displayScore = document.getElementById("label");
var initialInput = document.getElementById("initials");
var enterButton = document.getElementById("enter");
var highScoresList = document.getElementById("highScoresList");
// score variable
var score = 0;
var highScoreSave = [];

// object containing question arrays
let questions = [
    {
        question: "DOM stands for what?",
        choiceA: "Document Object Model",
        choiceB: "Dirty Odor Monster",
        choiceC: "Direct Ordinance Master",
        choiceD: "Dish Of Meatballs",
        correct: "A"
    },
    {
        question: "In javascript var stands for what?",
        choiceA: "Varsity",
        choiceB: "Varnish",
        choiceC: "Variable",
        choiceD: "Variety",
        correct: "C"
    },
    {
        question: "Which symbol is an alias for jQuery?",
        choiceA: "*",
        choiceB: "#",
        choiceC: "&",
        choiceD: "$",
        correct: "D"
    },
    {
        question: "Where in the HTML document should you usually link your external Javascript file?",
        choiceA: "In the head",
        choiceB: "At the top of body section",
        choiceC: "At the bottom of the body section",
        choiceD: "Within the CSS link",
        correct: "C"
    },
    {
        question: "What does HTML stand for?",
        choiceA: "Helpful Teacher Masking Laughter",
        choiceB: "Hyper Text Markup Language",
        choiceC: "Hello Today Make Lasagna",
        choiceD: "Head To Mask List",
        correct: "B"
    },
]



// event listener to start quiz on click
start.addEventListener("click", function () {
    start.style.display = "none";
    quiz.style.display = "block";
    addQuestions();
    countdown();

});
// timer section
function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        counter.textContent = timeLeft;
        timeLeft--;

        if (timeLeft === 0 || i > questions.length - 1) {
            counter.textContent = "";
            //insert call function for high score here
            quiz.style.display = "none";
            start.style.display = "none";
            highScore.style.display = "block";
            displayScore.innerText = "Your score is: " + score
            clearInterval(timeInterval);
        }

    }, 1000);
}

// quiz questions section
var i = 0;
var a = "";

function addQuestions() {
    var a = "";
    question.innerText = questions[i].question
    choiceA.innerText = questions[i].choiceA
    choiceB.innerText = questions[i].choiceB
    choiceC.innerText = questions[i].choiceC
    choiceD.innerText = questions[i].choiceD

}

// function to see if selected answer is correct or incorrect
function checkAnswer() {

    var b = questions[i].correct
    console.log(b);
    if (a === b) {
        score++;
        alert("correct! your current score is: " + score);
        console.log("your current score is: " + score);
    } else {
        alert("incorrect!");
    }
    i++;
    console.log(i);
    clearA();
    addQuestions();
    return
}

// function to clear var a
function clearA() {
    a = a.substr(1)
    console.log(a);
    return
}

// event listeners for choice selections
choiceA.addEventListener("click", function () {
    a += choiceA.getAttribute("id");
    console.log(a);
    console.log("clicked A")
    checkAnswer();
});
choiceB.addEventListener("click", function () {
    a += choiceB.getAttribute("id");
    console.log(a);
    console.log("clicked B");
    checkAnswer();
});
choiceC.addEventListener("click", function () {
    a += choiceC.getAttribute("id");
    console.log(a);
    console.log("clicked C")
    checkAnswer();
});
choiceD.addEventListener("click", function () {
    a += choiceD.getAttribute("id");
    console.log(a);
    console.log("clicked D")
    checkAnswer();
});

// High Score submit 
enterButton.addEventListener("click", function (event) {
    event.preventDefault();
    var user = {
        initials: initialInput.value,
        score: score
    };
    // set new submission
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    
    renderScore();
    
});
function renderScore() {
    // get most recent submission
    var userScore = JSON.parse(localStorage.getItem("user"));
    console.log(userScore);
    highScoreSave.push(userScore)
    highScoresList.innerHTML = "";

    for (var c = 0; c < highScoreSave.length; c++) {
        var currentIndex = highScoreSave[c];
        var li = document.createElement("li");
        li.textContent = "initials: " + currentIndex.initials + " Score: " + currentIndex.score;
        highScoresList.appendChild(li);
        console.log(currentIndex.initials + ": " + currentIndex.score);
    }
}
