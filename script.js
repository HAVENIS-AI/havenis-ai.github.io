// =====================================
// HAVENIS AI™ - JavaScript Module
// Interaktivität und Optimierungen
// ===================================== */

// Smooth Scroll Behavior für ältere Browser
if (!CSS.supports('scroll-behavior: smooth')) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// CTA Button Funktionalität
function handleCTA() {
    const email = 'info@havenis-ai.de';
    const subject = 'HAVENIS AI™ Anfrage';
    const body = 'Hallo HAVENIS Team, ich möchte mehr über Ihre Lösungen erfahren.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Navigation Highlight bei Scroll
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Debounce für Performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveLink, 50);
    });
});

// Feature Cards Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .team-info p').forEach((el) => {
    observer.observe(el);
});

// Performance Metrics
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    });
}

// Theme Toggle Support (für zukünftige Erweiterungen)
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.style.colorScheme = 'dark';
    } else if (theme === 'light') {
        document.documentElement.style.colorScheme = 'light';
    }
}

// LocalStorage für Theme Präferenz
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
setTheme(storedTheme);

// Analytics Ready (für zukünftige Integration)
window.hasAnalytics = false;

// Error Handler
window.addEventListener('error', (event) => {
    console.error('Application Error:', event.error);
    // Sende zu Error Tracking Service
});

// Unhandled Promise Rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
});

console.log('HAVENIS AI™ - Ready to go! 🚀');
