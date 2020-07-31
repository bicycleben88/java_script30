//grabs audio tags and .key class
//plays audio file
//adds class of .playing to .key to add animation

const playAudio = (e) => {
    //create variable to select audio tag at value of keyCode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    //create variable to select class .key at value of keyCode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //stops function from running 
    if (!audio) {
        return;
    }

    //rewinds to the start
    audio.currentTime = 0

    //plays audio
    audio.play()

    //adds class of .playing to elements in .key class --> .playing css animation
    key.classList.add('playing');
}

//removes .playing class i.e. gets rid of transform

function removeTransition (e) {
   
    //skips all values not transform
    if (e.propertyName !== 'transform') {
        return
    } 

    //removes .playing class
    this.classList.remove('playing')
}

//grabs all tags in .key class
const keys = document.querySelectorAll('.key')

//use forEach method to invoke removeTransition() on each element
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

//add event listener to invoke playAudio when key is pressed
window.addEventListener('keydown', playAudio)


