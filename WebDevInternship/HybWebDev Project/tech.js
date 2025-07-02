const questions = [
    {
        question: "URL stands for ___________.",
        choices: ["Uniform Retention Location", "Uniform Resource Locator", "Universal Resource List", "Uniform Retention Label"],
        correctAnswer: "B",
        funFact :"Did you know?&#129300; Tim Berners-Lee invented it in 1994."
    },
    {
        question: "Who is known as the first computer programmer?",
        choices: ["Charles Babbage", "Tommy Flowers", "Alan Turing", "Ada Lovelace"],
        correctAnswer: "D",
        funFact :"Did you know?&#129300; She was the daughter of the famous poet Lord Byron."
    },
    {
        question: "What is the largest social networking platform in the world?",
        choices: ["Facebook", "Instagram", "WhatsApp", "YouTube"],
        correctAnswer: "A",
        funFact :"Did you know?&#129300; 37% of the world's population(2.9 billion) are Facebook users."
    },
    {
        question: "Who is the CEO of OpenAI?",
        choices: ["Mira Murati", "Elon Musk", "Sam Altman", "Larry Page"],
        correctAnswer: "C",
        funFact :"Did you know?&#129300; He was briefly the CEO of Reddit."
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