const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})




const video = document.getElementById("sourceVideo");
  const canvas = document.getElementById("videoCanvas");
  const ctx = canvas.getContext("2d");

  video.addEventListener("play", () => {
    function draw() {
      if (!video.paused && !video.ended) {
        ctx.drawImage(video, 50, 50, 300, 150, 0, 0, 400, 200);
        requestAnimationFrame(draw);
      }
    }
    draw();
  });