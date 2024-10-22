



window.addEventListener('scroll', function() {
  const leftDiv = document.querySelector('.left');
  const rightDiv = document.querySelector('.right');
  
  // Get the scroll position of the window
  const scrollY = window.scrollY;
  
  // Define scroll threshold values
  const leftScrollThreshold = 200;  // When the left section becomes fixed
  const rightScrollThreshold = 800; // When the right section becomes fixed
  
  // Make left static/fixed based on scroll
  if (scrollY >= leftScrollThreshold && scrollY < rightScrollThreshold) {
    leftDiv.classList.add('fixed');
  } else {
    leftDiv.classList.remove('fixed');
  }

  // Make right static/fixed based on scroll
  if (scrollY >= rightScrollThreshold) {
    rightDiv.classList.add('fixed');
  } else {
    rightDiv.classList.remove('fixed');
  }
})