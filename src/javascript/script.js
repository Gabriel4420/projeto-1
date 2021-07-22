const playSound = (sound) => {
  let audioEl = document.querySelector(`#s_${sound}`);
  let key = document.querySelector(`div[data-key="${sound}"]`)

  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play()
  }

  {
    key && key.classList.add('active')
    setTimeout(() => {
      key != null && key.classList.remove('active');
    }, 300);
  }


}



document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLocaleLowerCase());
})

document.querySelector('.composer button').addEventListener('click', () => {
  let composite = document.querySelector('#input').value;
  let songArr = composite.split(' ');
  composite !== ' ' && playComposite(songArr)

  console.log(`typeComposite: ${composite}`)
})

const playComposite = (songArr) => {
  let wait = 0;

  for (let songItem of songArr) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 350;
  }
}