const button = document.querySelectorAll(".game-button");
const message = document.querySelector("#message");

const randomIndex = Math.floor(Math.random() * button.length);
const winnerButton = button[randomIndex];

function buttonClick(index) {
        for (let j = 0; j < button.length; ++j) {
            if (button[j] == winnerButton) {
                button[j].classList.add("winner");
            } else {
                button[j].classList.add("loser");
            }
        }
        if (button[index] == winnerButton) {
            message.textContent = "winner";
            message.style.color = "green";
        } else {
            message.textContent = "loser";
            message.style.color = "red";
        }
        message.classList.remove("show");
        setTimeout(function () {
            message.classList.add("show");
        }, 250);
} 
for (let i = 0; i < button.length; ++i) {
    button[i].addEventListener("click", function() {
        buttonClick(i);
    });
}