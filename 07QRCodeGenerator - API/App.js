const main = document.querySelector(".main");
let qrInput = document.querySelector(".data");
let generateBtn = document.querySelector(".submit");
let qrImg = document.querySelector("#img");

// button clicked

generateBtn.addEventListener("click", () => {
  const qrValue = qrInput.value;
  if (!qrValue) {
    return;
  }
  generateBtn.innerText = "QR Code Generating....";
  main.style.height = "600px";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.style.display = "block";
  qrImg.addEventListener("load", () => {
    main.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  })

  qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
      qrImg.style.display = "none";
      main.style.height = "400px";
      main.classList.remove("active");
    }
  })
})