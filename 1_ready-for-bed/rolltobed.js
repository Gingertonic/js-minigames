window.addEventListener('load', function(){
  alert('Hey, get to bed!');
  const player = document.getElementById('sleepy-person')
  const bed = document.getElementById('bed')
  const playerPosition = player.getBoundingClientRect();
  const bedPosition = bed.getBoundingClientRect();
  // player.style.left = `${playerPosition.left}px`
  bed.style.left = `${bedPosition.left}px`

  player.addEventListener('click', function(){
    alert('Ouch, that hurts');
  })

  moveRight = () => {
    current = player.getBoundingClientRect().left;
    player.setAttribute('style','transform: scaleX(1)');
    player.style.left = `${current + 10}px`
  }

  moveLeft = () => {
    current = player.getBoundingClientRect().left
    if (player.style.transform === 'scaleX(1)') {
      player.setAttribute('style','transform: scaleX(-1)');
      alert("Errr... sure you wanna go that way?");
    }
    player.style.left = `${current - 10}px`
  }

  document.addEventListener('keydown', function(e) {
    console.log(e);
    if (e.keyCode === 39){
      moveRight();
      inBedCheck();
    } else if (e.keyCode === 37) {
      moveLeft();
      inBedCheck();
    }
  })

  inBedCheck = () => {
    if (player.style.left > bed.style.left) {
      alert("Ready for bed?")
      player.setAttribute('style','transform:rotate(285deg)');
      player.style.left = `${bedPosition.left + 40}px`
      setTimeout(function(){alert("Yay Zzzzz.....")}, 500)
    }
  }
})
