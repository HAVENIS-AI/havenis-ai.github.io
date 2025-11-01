// Enhanced HAVENIS AI JavaScript
console.log('HAVENIS AI Website loaded - Version 2.0');

// Pitchdeck Download with Email Capture
function downloadPitchdeck() {
    const email = prompt('Bitte geben Sie Ihre E-Mail-Adresse ein, um das Pitchdeck zu erhalten:');

    if (email && email.includes('@')) {
        // In production: Send to backend/Mailchimp
        console.log('Pitchdeck request from:', email);
        alert(`Vielen Dank! Das Pitchdeck wird an ${email} gesendet.\n\nEin Teammitglied wird sich in Kürze bei Ihnen melden.`);

        // Track event (Google Analytics would go here)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'pitchdeck_download', {
                'email': email,
                'page': window.location.pathname
            });
        }
    } else if (email) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    }
}

// Book Call
function bookCall() {
    // In production: Integrate Calendly
    alert('Sie werden zu unserem Calendly-Link weitergeleitet...\n\n(Demo: calendly.com/havenis-ai/30min)');
    // window.open('https://calendly.com/havenis-ai/30min', '_blank');
}

// Request Data Room Access
function requestAccess(docType) {
    alert(`Zugang zu "${docType}" angefordert.\n\nBitte senden Sie uns eine E-Mail an founders@havenis.ai mit Ihrem NDA.`);

    // Track event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'dataroom_access', {
            'document': docType
        });
    }
}

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            type: document.getElementById('type') ? document.getElementById('type').value : 'general',
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        console.log('Form submitted:', formData);

        // In production: Send to backend
        alert('Vielen Dank für Ihre Nachricht!\n\nWir werden uns innerhalb von 24 Stunden bei Ihnen melden.');

        // Track event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'contact_form_submit', {
                'type': formData.type
            });
        }

        // Reset form
        this.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Track page views
if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
        'page_title': document.title,
        'page_path': window.location.pathname
    });
}

// Mobile menu toggle (if needed)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}