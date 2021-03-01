const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const form = document.customForm;

let countdown;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTime(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTime(secondsLeft);
  }, 1000);
}

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? 0 : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? 0 : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function handleSubmit(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
form.addEventListener("submit", handleSubmit);
