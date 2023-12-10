function scrollToTop() {
  // Var på sidan är vi?
  const scrollStep = window.scrollY / 25;

  function scrollAnimation() {
    // Scrolla tills vi är i topp
    if (window.scrollY > 0) {
      window.scrollBy(0, -scrollStep);
      // Animera rörelsen så den blir mjuk
      requestAnimationFrame(scrollAnimation);
    }
  }

  // Scrolla uppåt
  scrollAnimation();
}
