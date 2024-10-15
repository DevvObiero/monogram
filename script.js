window.addEventListener('scroll', () => {
    const textt = document.querySelector('.text');
    const scrollPosition = window.scrollY;
  
    // Trigger the scroll effect only within the first 200px of scrolling
    if (scrollPosition < 200) {
      textt.classList.add('scrolled');
      
      // Prevent page from scrolling while text is still fading
      window.scrollTo(0, 0);
    } else {
      textt.classList.remove('scrolled');
      
      // After the fade-out animation is done, allow the page to scroll
      window.removeEventListener('scroll', scrollLock);
    }
  });
  
  function scrollLock() {
    window.scrollTo(0, 0); // Lock the scroll
  }
  