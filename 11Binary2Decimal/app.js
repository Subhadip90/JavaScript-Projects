const convertBtn = document.querySelector('.btn');
const result = document.querySelector('.result');
convertBtn.addEventListener('click', addDecimal);

function getDecimal(binary) {
  binary = document.querySelector('#binary').value;
  binary = binary.toString().split("");
  let check = binary.every((num) => num == "0" || num == "1");
  if (check) {
    let length = binary.length;
    let ans = 0;
    let i = 0;
    while (i < length) {
      if (binary[i] == 1) {
        let num = length - 1 - i;
        ans += 2 ** num;
      }
      i++;
    }
    return `Decimal Number : ${ans}`;
  } else {
    return `Number is not Binary!! Enter Valid Number`;
  }
}

function addDecimal(event) {
  result.textContent = getDecimal(binary);
  return event.preventDefault();
}