let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 15;
let currentQuestion = null;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPrimeFactors(n) {
    const factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}

function generateQuestion() {
    const randomNumber = generateRandomNumber(1, 100);
    const factors = getPrimeFactors(randomNumber);
    return { number: randomNumber, factors: factors };
}

function displayQuestion() {
    const questionText = document.getElementById('question-text');
    currentQuestion = generateQuestion();
    questionText.textContent = `What are the prime factors of ${currentQuestion.number}?`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const userFactors = userAnswer.split(',').map(factor => parseInt(factor.trim())).sort((a, b) => a - b);
    const correctFactors = currentQuestion.factors.slice().sort((a, b) => a - b);

    const resultText = document.getElementById('result');
    if (JSON.stringify(userFactors) === JSON.stringify(correctFactors)) {
        score++;
        resultText.textContent = 'Correct!';
    } else {
        resultText.textContent = `Wrong! The correct answer is ${correctFactors.join(', ')}`;
    }
    document.getElementById('score').textContent = `Score: ${score} / ${totalQuestions}`;
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        document.getElementById('user-answer').value = '';
        document.getElementById('result').textContent = '';
        displayQuestion();
    } else {
        document.getElementById('question-text').textContent = 'Quiz complete!';
        document.getElementById('result').textContent = `Final Score: ${score} / ${totalQuestions}`;
        document.getElementById('user-answer').disabled = true;
    }
}

// Start the quiz with the first question
displayQuestion();
