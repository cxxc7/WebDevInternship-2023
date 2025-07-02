const questions = [
    {
        question: "What is the capital of India?",
        choices: ["Kolkata", "New Delhi", "Bangalore", "Mumbai"],
        correctAnswer: "B",
        funFact :"Did you know?&#129300; New Delhi is currently the second most populated city in the world."
    },
    {
        question: "Which is the largest landlocked country?",
        choices: ["Kazakhstan", "Mongolia", "Congo", "Turkmenistan"],
        correctAnswer: "A",
        funFact :"Did you know?&#129300; Kazakhstan has the longest border in the world."
    },
    {
        question: "In which country is Machu Picchu located?",
        choices: ["Chile", "Venezuela", "Peru", "Ecuador"],
        correctAnswer: "C",
        funFact :"Did you know?&#129300; A no-fly zone exists above this UNESCO site."
    },
    {
        question: "Which is the widest river in the world?",
        choices: ["Mississippi", "Yangtze", "Nile", "Amazon"],
        correctAnswer: "D",
        funFact :"Did you know?&#129300; At its widest point, it measured 11 kms."
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choiceAElement = document.getElementById("choiceA");
const choiceBElement = document.getElementById("choiceB");
const choiceCElement = document.getElementById("choiceC");
const choiceDElement = document.getElementById("choiceD");
const feedbackElement = document.getElementById("feedback");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    choiceAElement.textContent = current.choices[0];
    choiceBElement.textContent = current.choices[1];
    choiceCElement.textContent = current.choices[2];
    choiceDElement.textContent = current.choices[3];
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) {
        feedbackElement.textContent = "Please select an option";
        return;
    }

    const userAnswer = selectedChoice.value;
    const current = questions[currentQuestion];
    if (userAnswer === current.correctAnswer) {
        score++;
        feedbackElement.innerHTML = `Correct! ${current.funFact} `;
    } else {
        feedbackElement.innerHTML = `Wrong &#128556; The correct answer was "${current.correctAnswer}". Try Again, Champ!`;
    }

    document.getElementById("quizForm").reset();

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        displayResult();
    }   
}

function displayResult() {
    questionElement.textContent = `Quiz Completed! Your Score: ${score} out of ${questions.length}`;
    document.getElementById("quizForm").style.display = "none";
}

loadQuestion();
document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
    checkAnswer();
});