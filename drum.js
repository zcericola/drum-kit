

function playAudio(e){
    
   const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
   if(!audio) return;        
   audio.currentTime = 0;//allows for constant clicking
   audio.play(); //plays sound click when key is pressed    
   key.classList.add('selected');//adds animation               
      
    
}

const keys = document.querySelectorAll('.key');

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('selected');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playAudio);

