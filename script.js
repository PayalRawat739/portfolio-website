// DOM Elements
const contactForm = document.getElementById('contact-form');
const getStartedBtn = document.querySelector('.btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Contact Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Get Started Button
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            const servicesSection = document.getElementById('services');
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Handle Contact Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    // Simple validation
    if (name && email && message) {
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// Utility: Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
