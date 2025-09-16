// kunin yung mga element
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const maybeBtn = document.getElementById('maybeBtn');
const videoModal = document.getElementById('videoModal');
const prankMedia = document.getElementById('prankMedia');
const closeVideo = document.getElementById('closeVideo');

let noClickCount = 0;     // bilang para sa NO
let maybeClickCount = 0;  // bilang para sa MAYBE

// function para mag-play ng specific video
function playVideo(src) {
  prankMedia.src = src;      // palitan ang video file
  videoModal.style.display = 'flex';
  prankMedia.play();
}

// YES → specific video
yesBtn.addEventListener('click', () => {
  playVideo('tagumpay.mp4');
});

// MAYBE → gagalaw muna, tapos sa ika-3 click mag-play ng video
maybeBtn.addEventListener('click', () => {
  maybeClickCount++;

  if (maybeClickCount >= 3) {
    playVideo('maybe.mp4'); 
    maybeClickCount = 0; // reset count
  } else {
    // gagalaw yung MAYBE button randomly
    let randomX = Math.floor(Math.random() * 300) - 150;
    let randomY = Math.floor(Math.random() * 300) - 150;
    maybeBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
});

// NO → gagalaw muna, tapos sa ika-5 click mag-play ng video
noBtn.addEventListener('click', () => {
  noClickCount++;

  if (noClickCount >= 5) {
    playVideo('no.mp4');
    noClickCount = 0; // reset count
  } else {
    // gagalaw yung NO button randomly
    let randomX = Math.floor(Math.random() * 300) - 150;
    let randomY = Math.floor(Math.random() * 300) - 150;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
});

// CLOSE → stop video + refresh
closeVideo.addEventListener('click', () => {
  prankMedia.pause();
  prankMedia.currentTime = 0;
  videoModal.style.display = 'none';
  location.reload();
});
