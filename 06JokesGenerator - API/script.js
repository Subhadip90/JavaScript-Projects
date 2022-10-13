// get the joke section container
let jokeSection = document.querySelector("#joke");
// get the generate joke button
let generateBtn = document.querySelector("#jokeBtn");

let API =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// method
function acquireJoke() {
  // fetch joke from the API
  fetch(API)
    .then((info) => info.json())
    .then((item) => {
      jokeSection.textContent = `${item.joke}`;
    });
}

generateBtn.addEventListener("click", acquireJoke);
