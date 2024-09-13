fetch('https://api.github.com/repos/Eventual-Inc/Daft')
.then(response => response.json())
.then(data => {
    const stargazersCount = data.stargazers_count;
    document.getElementById('stargazers-count').innerHTML = `${stargazersCount}`;
})
.catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('stargazers-count').innerHTML = '----';
});

const container = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.quote-box');
const slideWidth = slides[0].offsetWidth + 20; // Width of slide plus gap (2 * 10px)
let currentIndex = 0;

function updateCarousel() {
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

document.querySelector('.carousel-control.right').addEventListener('click', () => {
    const maxIndex = slides.length - Math.floor(document.querySelector('.testimonials').offsetWidth / slideWidth);
    if (currentIndex < maxIndex) {
        currentIndex++;
    }
    updateCarousel();
});

document.querySelector('.carousel-control.left').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateCarousel();
});

// Handle resizing
window.addEventListener('resize', () => {
    updateCarousel(); // Adjust the carousel position if the window is resized
});

// Initialize
updateCarousel();