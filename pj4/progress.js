document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video');
  const overallProgressBar = document.querySelector('.overall-progress-bar');
  const overallProgressText = document.querySelector('.overall-progress-text');
  const totalSeconds = 128;
  const maxProgress = 100;

  let currentTime = 0;
  let isCompleted = false; 

  function updateOverallProgress() {
    if (!isCompleted) {
      currentTime = 0;
      videos.forEach(video => {
        currentTime += video.currentTime;
      });

      let progress = (currentTime / totalSeconds) * maxProgress;

      progress = progress > maxProgress ? maxProgress : progress;

      overallProgressBar.style.width = `${progress}%`;
      overallProgressText.textContent = `${Math.round(progress)}%`;

      if (progress >= maxProgress) {
        isCompleted = true;
        pauseAllVideos(); 
      }
    }
  }

  function pauseAllVideos() {
    videos.forEach(video => {
      video.pause();
    });
  }

  setInterval(updateOverallProgress, 1000);
});

