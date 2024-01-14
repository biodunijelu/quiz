// Variables for quiz logic
let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;

// Functions for quiz logic
function startQuiz() {
    // Hide start screen
    document.getElementById("start-screen").classList.add("hide");
    // Display questions
    document.getElementById("questions").classList.remove("hide");
    // Start timer
    startTimer();
    // Display first question
    displayQuestion();
}

// Function to display the current question and choices
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Display question title
    document.getElementById("question-title").textContent = currentQuestion.question;

    // Display choices
    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(choiceButton);
    });
}

//  function to check the selected answer
function checkAnswer(selectedAnswer) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswer) {
        // Handle correct answer
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        // Handle incorrect answer (subtract time)
        timeLeft -= 10; // Subtract 10 seconds for incorrect answer
        document.getElementById("feedback").textContent = "Wrong!";
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        // Quiz is complete
        endQuiz();
    }
}

// Function to start the timer
function startTimer() {
    timer = setInterval(function () {
        // Display the current time
        document.getElementById("time").textContent = timeLeft;

        // Check if the timer has reached 0
        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            endQuiz();
        }

        timeLeft--; // Decrease the time by 1 second
    }, 1000); // Update every second
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timer);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    const finalScore = timeLeft;
    document.getElementById("final-score").textContent = finalScore;

    // Store the final score in localStorage
    localStorage.setItem("finalScore", finalScore);
}

// Event listener for start button
// document.getElementById("start").addEventListener("click", startQuiz);
