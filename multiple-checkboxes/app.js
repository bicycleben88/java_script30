const checkboxes = document.querySelectorAll("input");
let lastCheckedBox = 0;

function checkMultipleBoxes(event) {
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastCheckedBox) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastCheckedBox = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", checkMultipleBoxes)
);
