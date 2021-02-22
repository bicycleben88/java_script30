window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector(".words");
let p = document.createElement("p");
words.appendChild(p);

function printToScreen(e) {
  const transcript = [...e.results]
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
}

recognition.addEventListener("result", printToScreen);
recognition.addEventListener("end", recognition.start);

recognition.start();
