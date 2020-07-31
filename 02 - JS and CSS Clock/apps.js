const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    // determines what degree the hand should be at at a given time
    const secondsDegree = ((seconds / 60) * 360) + 90;
    //applies transform style based on interval set by secondsDegree
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60 * 360) + 90);
    minsHand.style.transform = (`rotate(${minsDegree}deg)`);

    const hour = now.getHours();
    const hourDegree = ((hour / 12 * 360) + 90);
    hourHand.style.transform = (`rotate(${hourDegree}deg)`);

}

setInterval(setDate, 1000)

