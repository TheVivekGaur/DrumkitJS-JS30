
function playSound(e){
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if( !audio) return; //stop function from returning all together;
  audio.currentTime=0; //rewind to start;
 audio.play();
 key.classList.add('playing');

}

function removeTransition(e){
// console.log(e)
if(e.propertyName !== 'transform') return; // skip if its not a trasnform
this.classList.remove('playing');
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound )