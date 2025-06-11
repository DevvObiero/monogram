


document.addEventListener('DOMContentLoaded', () => {
    const revealElement = document.querySelector('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of element is visible
    observer.observe(revealElement);
});