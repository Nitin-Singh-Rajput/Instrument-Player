// Create eventListener to all the button 
document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', function() {
   
      var buttonText = button.textContent;
      
      if(buttonText == 'w'){
          playSound('https://files.codingninjas.in/tom-1-28537.mp3?_ga=2.237718464.15610611.1715364492-176801400.1707461671')
      }else if(buttonText == 'a'){
          playSound('https://files.codingninjas.in/tom-2-28541.mp3?_ga=2.237718464.15610611.1715364492-176801400.1707461671')
      }else if(buttonText == 's'){
          playSound('https://files.codingninjas.in/tom-3-28542.mp3?_ga=2.237718464.15610611.1715364492-176801400.1707461671')
      }else if(buttonText == 'd'){
          playSound('https://files.codingninjas.in/tom-4-28543.mp3?_ga=2.237718464.15610611.1715364492-176801400.1707461671')
      } else if(buttonText == 'j'){
          playSound('https://files.codingninjas.in/snare-28545.mp3?_ga=2.136423024.15610611.1715364492-176801400.1707461671')
      }else if(buttonText == 'k'){
          playSound('https://files.codingninjas.in/crash-28546.mp3?_ga=2.136423024.15610611.1715364492-176801400.1707461671')
      }else if(buttonText == 'i'){
          playSound('https://files.codingninjas.in/kick-bass-28547.mp3?_ga=2.237718464.15610611.1715364492-176801400.1707461671')
      }
  });
});
// All button should be able to play a different sound.
 

function playSound(soundUrl) {
    var audio = new Audio(soundUrl);
    audio.play();
}

