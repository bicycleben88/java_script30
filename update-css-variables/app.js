const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";

  if (this.name === "fade") {
    const value = this.value / 10;
    document.documentElement.style.setProperty(`--fade`, value);
  } else {
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );
  }
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
