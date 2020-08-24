// click to start div
const start = document.getElementById("start");
// main quiz div set to display none initially
const quiz = document.getElementById("quiz");
// div for question to appear in
const question = document.getElementById("question");
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
        question : "sample",
        imgSrc : "#",
        choiceA : "choice A",
        choiceB : "choice B",
        choiceC : "choice C",
        choiceD : "choice D",
        correct : "C"
    },
    {
        question : "sample 2",
        imgSrc : "#",
        choiceA : "choice A",
        choiceB : "choice B",
        choiceC : "choice C",
        choiceD : "choice D",
        correct : "C"
    },
    {
        question : "sample 3",
        imgSrc : "#",
        choiceA : "choice A",
        choiceB : "choice B",
        choiceC : "choice C",
        choiceD : "choice D",
        correct : "C"
    },
    {
        question : "sample 4",
        imgSrc : "#",
        choiceA : "choice A",
        choiceB : "choice B",
        choiceC : "choice C",
        choiceD : "choice D",
        correct : "C"
    },
    {
        question : "sample 5",
        imgSrc : "#",
        choiceA : "choice A",
        choiceB : "choice B",
        choiceC : "choice C",
        choiceD : "choice D",
        correct : "C"
    },
]

