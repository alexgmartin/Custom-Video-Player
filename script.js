const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('timestamp');


// Play & pause video - uses built in html 5 video methods
function toggleVideoStatus() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp. html5 api has currentTime and duration to use
function updateProgress() {
  // this allows range to move with percentage of video
  progress.value = (video.currentTime / video.duration) * 100;


  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100; // plus sign to make sure its int
}

// Stop video - since no html5 stop function, we have to set time back to 0 and pause it
function stopVideo() {
  video.currentTime = 0;
  video.pause;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

// Range bar needs a change event to work with progress
progress.addEventListener('change', setVideoProgress);