let buttons = document.querySelectorAll(".button");
let userChoice = ""; // Define userChoice in the outer scope
let res = document.querySelector(".Rules");

let compGenChoice = () => {
    let totalChoice = ["Snake", "Water", "Gun"];
    let choiceNum = Math.floor(Math.random() * 3);
    return totalChoice[choiceNum];
}

let game = () => {
    let compChoice = compGenChoice();
    console.log("Computer Choice: " + compChoice);
    let winner;
    if (compChoice === userChoice) {
        winner = "Draw";
        res.style.backgroundColor = "Grey";
    } else if (userChoice === "Snake" && compChoice === "Water") {
        winner = "User wins";
        res.style.backgroundColor = "Green";
        
    } else if (userChoice === "Snake" && compChoice === "Gun") {
        winner = "Computer wins";
        res.style.backgroundColor = "Red";

    } else if (userChoice === "Water" && compChoice === "Gun") {
        winner = "User wins";
        res.style.backgroundColor = "Green";
    } else if (userChoice === "Water" && compChoice === "Snake") {
        winner = "Computer wins";
        res.style.backgroundColor = "Red";
    } else if (userChoice === "Gun" && compChoice === "Water") {
        winner = "User wins";
        res.style.backgroundColor = "Green";
    } else if (userChoice === "Gun" && compChoice === "Snake") {
        winner = "Computer wins";
        res.style.backgroundColor = "Red";
    } else{
        console.log("No winner");
    }
    return winner; // Ensure winner is returned
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        userChoice = e.target.innerText; // Update the outer userChoice variable
        console.log("User Choice: " + userChoice);
        let winner = game(); // Call the game function to determine the winner
        console.log("Winner: " + winner); // Output the winner
    });
});

