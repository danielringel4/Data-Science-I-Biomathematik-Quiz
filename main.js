let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;

const topicDiv = document.getElementById("topic-selection");
const quizArea = document.getElementById("quiz-area");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const returnDiv = document.getElementById("return-btn");
const progressDiv = document.getElementById("progress");

function showTopics() {
    topicDiv.innerHTML = "";
    for (let topic in QUESTIONS) {
        const button = document.createElement("button");
        button.textContent = topic;
        button.classList.add("topic-btn");
        button.onclick = () => startQuiz(topic);
        topicDiv.appendChild(button);
    }
}

function startQuiz(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    score = 0;

    topicDiv.style.display = "none";
    quizArea.style.display = "block";

    showQuestion();
}

function showQuestion() {
    const questionsArray = QUESTIONS[currentTopic];
    const totalQuestions = questionsArray.length;
    progressDiv.textContent = `Frage ${currentQuestionIndex + 1} von ${totalQuestions}`;
    const q = QUESTIONS[currentTopic][currentQuestionIndex];
    questionText.textContent = q.text;
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
    // if (window.MathJax) {
    //     MathJax.typesetPromise();
    // }
}

function checkAnswer(selectedIndex) {
    const q = QUESTIONS[currentTopic][currentQuestionIndex];
    if (selectedIndex === q.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < QUESTIONS[currentTopic].length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    progressDiv.textContent = "";
    questionText.textContent = `Richtige Antworten: ${score}`;
    answersDiv.innerHTML = "";
    returnDiv.innerHTML ="";
    const button = document.createElement("button");
    button.textContent = "Zurück";
    button.classList.add("return-btn");
    button.onclick = () => {
        quizArea.style.display = "none";
        returnDiv.style.display = "none";
        topicDiv.style.display = "grid";
        topicDiv.innerHTML = "";
        showTopics();
    };
    returnDiv.appendChild(button);
    returnDiv.style.display = "block";
}

showTopics();