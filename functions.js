/**
 * 
 * @param {} name 
 * @returns 
 */
function game(name) {
    console.log("GAME:", name)
  const player1 = prompt("Player 1: Choose your items:");
  const player2 = prompt("Player 2: Choose your items:");

  if (player1 == player2) {
    return "TIE";
  } else if (
    (player1 == "rock" && player2 == "scissors") ||
    (player1 == "scissors" && player2 == "paper") ||
    (player1 == "paper" && player2 == "rock")
  ) {
    return "PLAYER1";
  } else {
    return "PLAYER2";
  }
}

const result1 = game("Round 1");
console.log(result1)
const result2 = game("Round 2");
console.log(result2)
const result3 = game("Final");
console.log(result3)
