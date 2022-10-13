function game() {

  // Selecting the elements

  let userScoreValue = document.getElementById("userScoreVal");
  let compScorveValue = document.getElementById("compScoreVal");
  let resultUserStat = document.getElementById("result-user-stat");
  let resultCompStat = document.getElementById("result-comp-stat");
  let winner = document.getElementById("result-final-stat");
  let rock = document.getElementById("r");
  let paper = document.getElementById("p");
  let scissor = document.getElementById("s");
  let spanTag1 = document.createElement("span");
  let spanTag2 = document.createElement("span");
  let spanTag3 = document.createElement("span");
  resultUserStat.appendChild(spanTag1);
  resultCompStat.appendChild(spanTag2);
  winner.appendChild(spanTag3);
  let compWin = 0;
  let userWin = 0;



  // rock option selected by user

  rock.addEventListener('click', () => {
    let options = ['Rock', 'Paper', 'Scissor'];
    let computer = options[Math.floor(Math.random() * options.length)];
    spanTag1.innerText = "Rock";
    spanTag2.innerText = "Computer";

    if (computer === 'paper') {
      compWin = compWin + 1;
      compScorveValue.innerText = compWin;
      spanTag3.innerText = "Computer Wins";
    }

    else if (computer === "Scissor") {
      userWin = userWin + 1;
      userScoreValue.innerText = userWin;
      spanTag3.innerText = "You win";
    }
    else {
      compWin = compWin + 1;
      userWin = userWin + 1;
      compScorveValue.innerText = compWin;
      userScoreValue.innerText = userWin;
      spanTag3.innerText = "Match Tie";
    }
  })

  // Paper clicked by user

  paper.addEventListener('click', () => {
    let options = ['Rock', 'Paper', 'Scissor'];
    let computer = options[Math.floor(Math.random() * options.length)];
    spanTag1.innerText = "Rock";
    spanTag2.innerText = "Computer";

    if (computer === "Scissor") {
      compWin = compWin + 1;
      compScorveValue.innerText = compWin;
      spanTag3.innerText = "Computer Wins";
    }
    else if (computer === "Rock") {
      userWin = userWin + 1;
      userScoreValue.innerText = userWin;
      spanTag3.innerText = "You Win";
    }
    else {
      compWin = compWin + 1;
      userWin = userWin + 1;
      compScorveValue.innerText = compWin;
      userScoreValue.innerText = userWin;
      spanTag3.innerText = "Match Tie";
    }
  })

  // Scissor clicked by the user


  scissor.addEventListener('click', () => {
    let options = ['Rock', 'Paper', 'Scissor'];
    let computer = options[Math.floor(Math.random() * options.length)];
    spanTag1.innerText = "Rock";
    spanTag2.innerText = "Computer";


    if (computer === "Rock") {
      compWin = compWin + 1;
      compScorveValue.innerText = compWin;
      spanTag3.innerText = "Computer Wins";
    }
    else if (computer === "Paper") {
      userWin = userWin + 1;
      userScoreValue.innerText = userWin;
      spanTag3.innerText = "You Win";
    }
    else {
      compWin = compWin + 1;
      userWin = userWin + 1;
      compScorveValue.innerText = compWin;
      userScoreValue.innerText = userWin;
      spanTag3.innerText = "Match Tie";
    }
  })
}

game();