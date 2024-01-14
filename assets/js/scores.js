document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the final score from localStorage
    const finalScore = localStorage.getItem("finalScore");

    // Display the final score on the highscores page
    document.getElementById("final-score").textContent = finalScore;

    // For example, I am creating  a new list item and append it to the highscores list
    if (finalScore) {
        const highscoresList = document.getElementById("highscores");
        const listItem = document.createElement("li");
        listItem.textContent = `Score: ${finalScore}`;
        highscoresList.appendChild(listItem);
    }
});
