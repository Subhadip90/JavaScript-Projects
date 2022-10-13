const container = document.querySelector(".container");
const error = document.querySelector(".error");
let input = document.getElementById("dob");

function getAge() {
  return input.value;
}

function calcAge() {
  let age = getAge();
  const ageArr = age.split('-');

  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  console.log(year, month, day);
  console.log(year - ageArr[0], month - ageArr[1], day - ageArr[2]);
  return {
    years: year - ageArr[0],
    months: month - ageArr[1],
    days: day - ageArr[2]
  }
}

function displayAge() {
  let ourAge = calcAge();
  for (e in ourAge) {
    if (ourAge[e] < 0) {
      error.style.display = "block";
    } else {
      error.style.display = "none";
      container.querySelector(".age span").innerText = ourAge[e];
    }
  }

  container.querySelector('.age :nth-child(1)').innerText = ourAge.years;
  container.querySelector('.age :nth-child(2)').innerText = ourAge.months;
  container.querySelector('.age :nth-child(3)').innerText = ourAge.days;
}
input.addEventListener('input', displayAge);

