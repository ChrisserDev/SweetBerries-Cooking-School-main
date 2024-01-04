

const hamburgerEl = document.getElementById('hamburger');
const welcomeText = document.querySelector('.discover-more-text');


hamburgerEl.addEventListener('change', function () {
    welcomeText.classList.toggle('margin', this.checked);
});

