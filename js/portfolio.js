function openVideo(videoUrl) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("appVideo");
  const source = video.querySelector("source");

  source.src = videoUrl;
  video.load();
  modal.style.display = "flex";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("appVideo");

  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
}
