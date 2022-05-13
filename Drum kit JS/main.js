

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) 
    if(!audio) return; //stop the function from running all together.
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    //transition end event
}

function removeTransition(e) {
   if (e.propertyName !== 'transform' ) return;
   this.classList.remove('playing')
}


window.addEventListener('keydown', playSound); 

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //go through all the keys and when they finish transition(style sheets) then we remove the transiion.
