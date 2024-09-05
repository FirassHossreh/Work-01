document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video-hover");

  videos.forEach((video) => {
    video.addEventListener("mouseover", function () {
      video.play();
    });

    video.addEventListener("mouseout", function () {
      video.pause();
      video.currentTime = 0;
    });
  });
});
