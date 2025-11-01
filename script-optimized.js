// HAVENIS AI - Optimized JavaScript

// Smooth scroll to demo section
function scrollToDemo() {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Track analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'button_click', {
                'event_category': 'engagement',
                'event_label': 'demo_section_scroll'
            });
        }
    }
}

// Video timeline interaction (for future video implementation)
document.addEventListener('DOMContentLoaded', function() {
    const timelineMarkers = document.querySelectorAll('.timeline-marker');

    timelineMarkers.forEach(marker => {
        marker.style.cursor = 'pointer';
        marker.addEventListener('click', function() {
            // Future: Jump to specific time in video
            console.log('Timeline marker clicked:', this.textContent);
        });
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.demo-section, .pillars-section, .market-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});