const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  // Get the current scroll position
  const scrollStep = window.scrollY / 15;

  function scrollAnimation() {
    if (window.scrollY > 0) {
      window.scrollBy(0, -scrollStep);
      requestAnimationFrame(scrollAnimation);
    }
  }

  // Trigger the scroll animation
  scrollAnimation();
}
