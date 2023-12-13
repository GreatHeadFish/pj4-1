const progressBars = document.querySelectorAll('.progress-bar1, .progress-bar2, .progress-bar3, .progress-bar4, .progress-bar5, .progress-bar6');
const timeIntervals = [18, 16, 22, 28, 35, 11];

function startProgress(bar, duration) {
  let width = 0;
  let increment = 100 / (duration * 20);

  const intervalId = setInterval(() => {
    if (width >= 100) {
      clearInterval(intervalId);
      startNextProgress(bar);
    } else {
      width += increment;
      width = width > 100 ? 100 : width;

      bar.style.width = width + "%";
      bar.nextElementSibling.innerHTML = width.toFixed(2) + "%";
    }
  }, 50);
}

function startNextProgress(currentBar) {
  let currentIndex = Array.from(progressBars).indexOf(currentBar);
  let nextIndex = currentIndex + 1;

  if (nextIndex >= progressBars.length) {
    clearInterval(intervalId); 
    return; 
  }

  startProgress(progressBars[nextIndex], timeIntervals[nextIndex]);
}

function loopProgressBar() {
  startProgress(progressBars[0], timeIntervals[0]);
}

loopProgressBar();

document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video');

  function playNext(index) {
    if (index < videos.length) {
      videos[index].addEventListener('ended', () => {
        if (index === videos.length - 1) {
          playNext(0); 
        } else {
          playNext(index + 1); 
        }
      });
      videos[index].muted = true;
      videos[index].play();
    }
  }

  for (let i = 0; i < 1; i++) {
    videos[i].setAttribute('autoplay', 'autoplay');
    videos[i].muted = true;
    videos[i].addEventListener('ended', () => playNext(i + 1));
    videos[i].play();
  }

  document.addEventListener('click', () => {
    for (let i = 1; i < videos.length; i++) {
      videos[i].addEventListener('click', () => {
        videos[i].muted = true;
        videos[i].play();
      });
    }
  });
});


const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach((video, index) => {
  video.addEventListener('ended', () => {
    videoItems.forEach(vid => vid.classList.remove('clicked'));
    video.classList.add('clicked');
    startNextProgress(progressBars[index]);
  });
});

videoItems.forEach(video => {
  video.addEventListener('click', () => {
    if (video.classList.contains('clicked')) {
      video.classList.remove('clicked');
    } else {
      videoItems.forEach(otherVideo => {
        if (otherVideo !== video && otherVideo.classList.contains('clicked')) {
          otherVideo.classList.remove('clicked');
        }
      });
      video.classList.add('clicked');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const refreshButton = document.getElementById('refreshButton');

  refreshButton.addEventListener('click', () => {
    location.reload(); 
  });
});

var topGrid = document.querySelector('.top-grid');
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    topGrid.style.display = 'none';
  } else {
    topGrid.style.display = 'grid';
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

function goToPage() {

  window.location.href = "file:///C:/Users/xdc/Desktop/pj4landingpage/index.html"; 
}


function refreshPage() {
  location.reload();
}

function printPage() {
  topGrid.style.display = 'none';
  window.print();
  console.log("Print the page");
}
