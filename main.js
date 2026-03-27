let questions = {};
let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;

const topicDiv = document.getElementById("topic-selection");
const quizArea = document.getElementById("quiz-area");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const returnDiv = document.getElementById("return-btn");
const progressDiv = document.getElementById("progress");

async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        if (!response.ok) throw new Error('Netzwerk-Antwort war nicht ok');
        
        questions = await response.json();
        console.log("Daten erfolgreich geladen");
        showTopics();
    } catch (error) {
        console.error('Fehler beim Laden der JSON:', error);
        topicDiv.innerHTML = "<p>Fehler beim Laden der Fragen. Bitte prüfe die questions.json.</p>";
    }
}

function showTopics() {
    topicDiv.innerHTML = "";
    topicDiv.style.display = "grid";
    for (let topic in questions) {
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
    returnDiv.style.display = "none";
    showQuestion();
}

function showQuestion() {
    const questionsArray = questions[currentTopic];
    const q = questionsArray[currentQuestionIndex];
    
    progressDiv.textContent = `Frage ${currentQuestionIndex + 1} von ${questionsArray.length}`;
    questionText.textContent = q.text;
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.onclick = (e) => checkAnswer(index, e.target);
        answersDiv.appendChild(button);
    });

    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function checkAnswer(selectedIndex, clickedButton) {
    const q = questions[currentTopic][currentQuestionIndex];
    const allButtons = answersDiv.querySelectorAll(".answer-btn");
    
    allButtons.forEach(btn => btn.style.pointerEvents = "none");

    if (selectedIndex === q.correct) {
        score++;
        clickedButton.classList.add("correct");
    } else {
        clickedButton.classList.add("wrong");
        allButtons[q.correct].classList.add("correct");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions[currentTopic].length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    progressDiv.textContent = "";
    questionText.textContent = `Quiz beendet! Deine Punktzahl: ${score} von ${questions[currentTopic].length}`;
    answersDiv.innerHTML = "";
    
    returnDiv.innerHTML = "";
    const button = document.createElement("button");
    button.textContent = "Zurück zur Übersicht";
    button.classList.add("return-btn");
    button.onclick = () => {
        quizArea.style.display = "none";
        showTopics();
    };
    returnDiv.appendChild(button);
    returnDiv.style.display = "block";
}

loadQuestions();