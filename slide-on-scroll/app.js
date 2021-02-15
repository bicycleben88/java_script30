const sliderImages = document.querySelectorAll(".slide-in");

function debounce(func, delay = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const callLater = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(callLater, delay);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  sliderImages.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPassed = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPassed) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
