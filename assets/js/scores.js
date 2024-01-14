document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the final score from localStorage
    const finalScore = localStorage.getItem("finalScore");
    const userInitials = localStorage.getItem("userInitials");

    // Display the final score on the highscores page
    document.getElementById("final-score").textContent = finalScore;
    document.getElementById("user-initials").textContent = userInitials;
    
    // For example, I create a new list item and append it to the highscores list
    if (finalScore) {
        const highscoresList = document.getElementById("highscores");
        const listItem = document.createElement("li");
        listItem.textContent = `Score: ${finalScore}`;
        highscoresList.appendChild(listItem);
    }
});
