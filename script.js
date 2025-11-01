// HAVENIS AI - Enhanced JavaScript
console.log('🚀 HAVENIS AI Website loaded');

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                type: document.getElementById('type')?.value || 'general',
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };

            console.log('Form submitted:', formData);

            // Show success message
            alert('Vielen Dank für Ihre Nachricht! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.');

            // Reset form
            this.reset();
            this.style.display = 'none';
        });
    }
});

// Show contact form function
function showContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
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

// Enhanced signal animation with wave effects
const signalAnimation = document.getElementById('signalAnimation');
if (signalAnimation) {
    setInterval(() => {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid rgba(0,102,255,0.5);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: expand 2s ease-out forwards;
            pointer-events: none;
        `;
        signalAnimation.appendChild(wave);

        setTimeout(() => wave.remove(), 2000);
    }, 500);
}

// Add CSS animation for wave expansion
const style = document.createElement('style');
style.textContent = `
    @keyframes expand {
        from {
            width: 50px;
            height: 50px;
            opacity: 1;
        }
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        nav.style.boxShadow = 'none';
    } else {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    }

    lastScroll = currentScroll;
});

// FAQ accordion auto-close
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', function() {
        if (this.open) {
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== this && otherItem.open) {
                    otherItem.open = false;
                }
            });
        }
    });
});

// Track events (placeholder for future analytics)
function trackEvent(category, action, label) {
    console.log(`Event: ${category} - ${action} - ${label}`);
    // Future: Send to Google Analytics, Mixpanel, etc.
}

// Track CTA clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const text = this.textContent.trim();
        trackEvent('CTA', 'Click', text);
    });
});

console.log('✅ All features initialized successfully');