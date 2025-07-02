const questions = [
    {
        question: "Who won the 2010 FIFA WC?",
        choices: ["Brazil", "Argentina", "Germany", "Spain"],
        correctAnswer: "D",
        funFact :"Did you know?&#129300; Spain became the first team to win the World Cup after losing their first match."
    },
    {
        question: "Who is the highest wicket taker in IPL history?",
        choices: ["L Malinga", "Y Chahal", "DJ Bravo", "R Jadeja"],
        correctAnswer: "B",
        funFact :"Did you know?&#129300; Chahal represented India at the World Youth Chess Championship."
    },
    {
        question: "Who holds the record for the most missed shots in the NBA?",
        choices: ["Kobe Bryant", "LeBron James", "Larry Bird", "Magic Johnson"],
        correctAnswer: "A",
        funFact :"Did you know?&#129300; Kobe played for the LA Lakers his entire professional career."
    },
    {
        question: "Who has won the French Open the most number of times?",
        choices: ["N Djokovic", "R Federer", "R Nadal", "P Sampras"],
        correctAnswer: "C",
        funFact :"Did you know?&#129300; Nadal has won it a record 14 times."
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