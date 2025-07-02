const questions = [
    {
        question: "What is the name of Maroon 5's lead singer?",
        choices: ["Adam Levine", "Chris Martin", "Matt Flynn", "Justin Timberlake"],
        correctAnswer: "A",
        funFact :"Did you know?&#129300; He co-founded Maroon 5 in 1994, while he was still in high school."
    },
    {
        question: "Which was the first Indian movie nominated for an Oscar?",
        choices: ["Salaam Bombay", "Sholay", "Mother India", "Lagaan"],
        correctAnswer: "C",
        funFact :"Did you know?&#129300;  It lost by just one vote in 1958 for Best Film in Foreign Language category."
    },
    {
        question: "In which year was Doordarshan established?",
        choices: ["1953", "1962", "1956", "1959"],
        correctAnswer: "D",
        funFact :"Did you know?&#129300; It was the only TV channel in pre Liberalisation India."
    },
    {
        question: "Who won the Academy Award for Best Actor in 2022?",
        choices: ["Rami Malek", "Will Smith", "Anthony Hopkins", "Joaquin Phoenix"],
        correctAnswer: "B",
        funFact :"Did you know?&#129300; The win was overshadowed by the Chris Rock-Will Smith slapping incident."
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