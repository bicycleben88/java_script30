const playAudio = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const card = document.querySelector(`.card[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  card.classList.add("playing");
};

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) =>
  card.addEventListener("transitionend", removeTransition)
);

window.addEventListener("keydown", playAudio);
