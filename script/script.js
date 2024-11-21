const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})




console.log(bootstrap);
document.addEventListener("DOMContentLoaded", function() {
  var toggler = document.querySelector(".navbar-toggler");
  var collapse = document.querySelector("#collapsibleNavbar");

  toggler.addEventListener("click", function() {
      collapse.classList.toggle("show");
  });
});
