"use strict";
var userScore = 0;
var computerScore = 0;
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputedChoice() {
  const choicevalue = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerimg = choicevalue[randomNumber];
  return computerimg;
}

function win() {
  userScore++;
  if (localStorage.userScore) {
    localStorage.userScore = Number(localStorage.userScore) + 1;
    document.querySelector(".userScore").innerHTML = localStorage.userScore;
  } else {
    localStorage.userScore = 1;
    document.querySelector(".userScore").innerHTML = userScore;
  }
}
function loss() {
  computerScore++;
  if (localStorage.computerScore) {
    localStorage.computerScore = Number(localStorage.computerScore) + 1;
    document.querySelector(".computerScore").innerHTML =
      localStorage.computerScore;
  } else {
    localStorage.computerScore = 1;
    document.querySelector(".computerScore").innerHTML = computerScore;
  }
}
if (
  localStorage.userScore == undefined ||
  localStorage.computerScore == undefined
) {
  localStorage.userScore = 0;
  localStorage.computerScore = 0;
  document.querySelector(".userScore").innerHTML = localStorage.userScore;
  document.querySelector(".computerScore").innerHTML =
    localStorage.computerScore;
}
if (location.reload) {
  document.querySelector(".userScore").innerHTML = localStorage.userScore;
  document.querySelector(".computerScore").innerHTML =
    localStorage.computerScore;
}

function game(userChoice) {
  const computerChoice = getComputedChoice();
  console.log(userChoice);
  console.log(computerChoice);

  if (
    (userChoice == "rock" && computerChoice == "paper") ||
    (userChoice == "paper" && computerChoice == "scissors") ||
    (userChoice == "scissors" && computerChoice == "rock")
  ) {
    console.log("user win");
    win();
    winBox(userChoice, computerChoice);
  } else if (userChoice == computerChoice) {
    console.log("tie");
    tieFunction(userChoice, computerChoice);
  } else {
    console.log("computer win");
    loss();
    computerWining(userChoice, computerChoice);
  }
}
function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
    const srcimg = rock_div.src;
    return srcimg;
  });
  paper_div.addEventListener("click", function () {
    game("paper");
    const srcimg = paper_div.src;
    return srcimg;
  });
  scissors_div.addEventListener("click", function () {
    game("scissors");
    const srcimg = scissors_div.src;
    return srcimg;
  });
}
main();
function winBox(userChoice, computerChoice) {
  document.querySelector(".choices").innerHTML = `
    <div class="winbox">
    <div class="choice">
            <div id="userpic">
            <h4>YOU PICKED</h4>
            <img src="img/${userChoice}.png" width="170" height="170"/>
            </div>
          </div>
          <div class="choice" id="playAgainbtn">
          <h2>YOU WIN</h2>
          <h3>AGAINST PC</h3>
          <button class="playAgain">Play Again </button>
          </div>
          <div class="choice">
          <div id="cpic">
          <h4>PC PICKED</h4>
            <img src="img/${computerChoice}.png" width="170" height="170"  />
            </div>
          </div>
    </div>
  `;
  document.querySelector(".bottom-btn").innerHTML = `
  <div class="bottom-btn">
  <button class="rulebtn rule" type="button">Rules</button>
  <button class="right" id="next" type="button">Next</button>
</div>
  `;
  document.querySelector(".playAgain").addEventListener("click", function () {
    window.location.reload();
  });
  document.querySelector("#next").addEventListener("click", troffy);
  document.querySelector(".rule").addEventListener("click", ruleBTN);
}
function troffy() {
  document.querySelector(".container").innerHTML = `
  <div class="troffyContent">
      <img src="img/trofy.png" alt="trofy" width="504" height="297">
      <h1>HURRAY!!</h1>
      <h2>YOU WON THE GAME</h2>
      <button class="playAgain">Play Again </button>
    </div>
  `;
  document.querySelector(".playAgain").addEventListener("click", function () {
    window.location.reload();
  });
  document.querySelector(".bottom-btn").innerHTML = `
  <button class="right rule" type="button">Rules</button>
  `;
  document.querySelector(".rule").addEventListener("click", ruleBTN);
}

function computerWining(userChoice, computerChoice) {
  document.querySelector(".choices").innerHTML = `
    <div class="winbox">
    <div class="choice">
            <div id="cpic">
            <h4>YOU PICKED</h4>
            <img src="img/${computerChoice}.png" width="180" height="180"/>
            </div>
          </div>
          <div class="choice" id="playAgainbtn">
          <h2>YOU LOST</h2>
          <h3>AGAINST PC</h3>
          <button class="playAgain">Play Again </button>
          </div>
          <div class="choice">
          <div id="userpic">
          <h4>PC PICKED</h4>
            <img src="img/${userChoice}.png" width="180" height="180"  />
            </div>
          </div>
    </div>
  `;
  document.querySelector(".bottom-btn").innerHTML = `
  <div class="bottom-btn">
  <button class="right rule" type="button">Rules</button>
</div>
  `;
  document.querySelector(".playAgain").addEventListener("click", function () {
    window.location.reload();
  });
  document.querySelector(".rule").addEventListener("click", ruleBTN);
}
function tieFunction(userChoice, computerChoice) {
  document.querySelector(".choices").innerHTML = `
    <div class="winbox">
    <div class="choice">
            <div id="cpic col-m-12">
            <h4>YOU PICKED</h4>
            <img src="img/${userChoice}.png" width="180" height="180"/>
            </div>
          </div>
          <div class="choice" id="playAgainbtn">
          <h2>TIE UP</h2>
          <br/>
          <button class="playAgain">REPLAY </button>
          </div>
          <div class="choice">
          <div id="cpic">
          <h4>PC PICKED</h4>
            <img src="img/${computerChoice}.png" width="180" height="180"  />
            </div>
          </div>
    </div>
  `;
  document.querySelector(".bottom-btn").innerHTML = `
  <div class="bottom-btn">
  <button class="right rule" type="button">Rules</button>
</div>
  `;
  document.querySelector(".playAgain").addEventListener("click", function () {
    window.location.reload();
  });
  document.querySelector(".rule").addEventListener("click", ruleBTN);
}

document.querySelector(".rule").addEventListener("click", ruleBTN);
function ruleBTN() {
  let ruleBox = document.querySelector(".gameRuleBox");
  ruleBox.classList.add("ruledesign");
  document.querySelector(".crossBtn").addEventListener("click", () => {
    ruleBox.classList.remove("ruledesign");
  });
}
