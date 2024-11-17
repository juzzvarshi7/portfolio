// Smooth Scrolling for Navigation
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add 'loaded' class to body after page loads for fade-in effect
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
