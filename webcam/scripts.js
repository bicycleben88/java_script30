const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((e) => console.error("No Dice", e));
}

function paintToCavas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = toGreyScale(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "nice smile");
  link.innerHTML = `<img src=${data} alt="image from camera" />`;
  strip.insertBefore(link, strip.firstChild);
}

function toGreyScale(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    const average =
      (pixels.data[i] + pixels.data[i + 1] + pixels.data[i + 2]) / 3;
    pixels.data[i] = average;
    pixels.data[i + 1] = average;
    pixels.data[i + 2] = average;
  }
  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCavas);
