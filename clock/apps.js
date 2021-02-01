const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  // Arithmetic to correlate degree of hand to the current second
  const secondsDegrees = (seconds / 60) * 360 + 90;
  if (seconds === 0) {
    secondHand.classList.remove("transition");
    secondHand.style.transform = `rotate(90deg)`;
  } else {
    secondHand.classList.add("transition");
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  const minutes = now.getMinutes();
  const minsDegrees = (minutes / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); // run function every second
