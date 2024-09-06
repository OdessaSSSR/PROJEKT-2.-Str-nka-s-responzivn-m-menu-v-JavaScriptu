const payment = document.querySelector(".platba");
const sale = document.querySelector(".sleva");
const robe = document.querySelector(".saty");
const advert = document.querySelector(".reklam");
const description = document.querySelector(".description");
const reset = document.querySelector(".navrat");

const audio = new Audio();
audio.preload = "auto";
audio.src = "/Císařovy nové šaty/images+/Beethoven-simfoniya-5.mp3";

payment.addEventListener("click", () => {
  if (robe.style.opacity === "1") {
    robe.style.opacity = "0";
  } else {
    robe.style.opacity = "1";
    audio.play();
  }

  payment.style.display = "none";
  sale.style.display = "none";
  advert.style.display = "none";
  reset.style.display = "block";
  description.innerHTML = "Státní pokladna je prázdná,<br>Veličenstvo...";
  description.style.backgroundColor = "yellow";
});
