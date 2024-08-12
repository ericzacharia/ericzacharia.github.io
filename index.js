const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Chatbot functionality
document.getElementById('chatbot-icon').addEventListener('click', function () {
    document.getElementById('chatbot-window').style.display = 'flex';
    document.getElementById('chatbot-icon').style.display = 'none';
});

document.getElementById('chatbot-close').addEventListener('click', function () {
    document.getElementById('chatbot-window').style.display = 'none';
    document.getElementById('chatbot-icon').style.display = 'flex';
});