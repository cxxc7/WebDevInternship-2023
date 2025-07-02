const questions = [
    {
        question: "Who was the India king who opposed Alexander in the Battle of the Hydaspes?",
        choices: ["Ambhi Kumar", "Mahanandin", "Porus", "Dhanananda"],
        correctAnswer: "C",
        funFact :"Did you know?&#129300; Alexander was impressed by Porus' bravery and restored his kingdom to him."
    },
    {
        question: "_________ became the first Asian city to get electric street lights.",
        choices: ["Tokyo", "Bombay", "Beijing", "Bangalore"],
        correctAnswer: "D",
        funFact :"Did you know?&#129300; On August 5, 1905, the first lights came on around KR Market."
    },
    {
        question: "Who established the Mughal Empire in India?",
        choices: ["Humayun", "Babur", "Aurangzeb", "Akbar"],
        correctAnswer: "B",
        funFact :"Did you know?&#129300; Babur was a descendant of Timur and Genghis Khan."
    },
    {
        question: "Who was the first women ruler of India?",
        choices: ["Razia Sultana", "Noorjahan", "Rani Padmini", "Rani Lakshmibai"],
        correctAnswer: "A",
        funFact :"Did you know?&#129300; She succeeded her father Shams-ud-din Iltutmish to the Delhi Sultanate in 1236."
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