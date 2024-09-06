/* ------------  Validace -------------*/

const form = document.getElementById("form");
const emailInput = document.querySelector(".email");
const resultText = document.querySelector(".text");
const pattern =
  /^([a-z\A-Z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;

  if (emailValue.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    resultText.textContent = "Váš email je ve správném formátu";
    resultText.style.color = "#00ff00";
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
    resultText.textContent = "Váš email není ve správném formátu";
    resultText.style.color = "#ff0000";
  }

  if (emailValue === "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
    resultText.textContent = "";
  }
});

/* ------------ Odesilání zprávy ------------ */

const mailSending = document.querySelector(".send");
const textArea = document.getElementById("#text-field");
const answer = document.querySelector(".reply");
const newLetter = document.querySelector(".new");

mailSending.addEventListener("click", (e) => {
  const emailValue = emailInput.value;
  e.preventDefault();

  if (emailValue.match(pattern)) {
    answer.style.display = "flex";
    newLetter.style.display = "block";
  } else {
    alert("Nezapomeň napsat svůj E-mail a text zprávy!");
  }
});
