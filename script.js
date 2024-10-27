



window.addEventListener('scroll', function() {
  const leftDiv = document.querySelector('.left');
  const rightDiv = document.querySelector('.right');
  

})



// Select the <h2> element
const textElement = document.getElementById("scrollText");

// Define a threshold for when to switch text
const threshold = 100;

window.addEventListener("scroll", function() {
  // Check if we are below the threshold
  if (window.scrollY > threshold) { 
    // If scrolled down beyond threshold, change text and color
    textElement.textContent = "Meet each new mode";
    textElement.style.color = "#FF8D6B";
  } else { 
    // If scrolled back above threshold, revert text and color
    textElement.textContent = "Next level productivity starts here.";
    textElement.style.color = "black"; // Change this to your default color
  }
}); 
