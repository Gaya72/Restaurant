var myCarousel = document.querySelector('#carouselExampleCaptions');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // 3 վայրկյան
  ride: 'carousel' // Սկսել ավտոմատ
});

document.addEventListener('scroll', function() {
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(element => {
      let offset = window.pageYOffset;
      element.style.backgroundPositionY = offset * 0.5 + "px";
  });
});




