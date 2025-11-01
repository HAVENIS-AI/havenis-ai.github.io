// Form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
    this.reset();
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
// Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
// Signal animation
const signalAnimation = document.getElementById('signalAnimation');
if (signalAnimation) {
    setInterval(() => {
        const wave = document.createElement('div');
        wave.style.cssText = 'position:absolute;width:50px;height:50px;border-radius:50%;border:2px solid rgba(0,102,255,0.5);top:50%;left:50%;transform:translate(-50%,-50%);animation:expand 2s ease-out forwards';
        signalAnimation.appendChild(wave);
        setTimeout(() => wave.remove(), 2000);
    }, 500);
}
const style = document.createElement('style');
style.textContent = '@keyframes expand { from { width: 50px; height: 50px; opacity: 1; } to { width: 200px; height: 200px; opacity: 0; } }';
document.head.appendChild(style);
console.log('HAVENIS AI Website loaded');