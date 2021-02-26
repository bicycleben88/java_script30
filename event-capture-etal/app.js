const divs = document.querySelectorAll("div");

function logText(e) {
  //   e.stopPropagation();
  console.log(this.classList.value);
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false,
    once: true,
  })
);

document.querySelector("button").addEventListener(
  "click",
  () => {
    console.log("Clicked");
  },
  {
    once: true,
  }
);