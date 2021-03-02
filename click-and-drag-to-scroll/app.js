const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

function setUpWalk(e) {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function walk(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
}

function removeClass() {
  isDown = false;
  slider.classList.remove("active");
}

slider.addEventListener("mousedown", setUpWalk);
slider.addEventListener("mousemove", walk);
slider.addEventListener("mouseleave", removeClass);
slider.addEventListener("mouseup", removeClass);
