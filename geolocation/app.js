const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    const speedInMPH = data.coords.speed * 0.62;
    speed.textContent = speedInMPH.toFixed(2);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (error) => {
    console.error(error);
    alert("Must allow location!");
  }
);
