// HAVENIS AI - Optimized Website JavaScript

// Smooth scroll to demo section
function scrollToDemo() {
  const demoSection = document.getElementById('demo');
  if (demoSection) {
    demoSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Track analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        'event_category': 'navigation',
        'event_label': 'hero_cta_demo'
      });
    }
  }
}

// Video timeline marker interactions
document.addEventListener('DOMContentLoaded', function() {

  // Timeline markers
  const timelineMarkers = document.querySelectorAll('.timeline-marker');
  timelineMarkers.forEach(marker => {
    marker.addEventListener('click', function() {
      const time = this.dataset.time;
      console.log(`Timeline marker clicked: ${time}s`);

      // If you have a video element, you would seek to this time
      const video = document.querySelector('.demo-video video');
      if (video) {
        video.currentTime = time;
        video.play();
      }

      // Track analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timeline_marker_click', {
          'event_category': 'engagement',
          'event_label': `timeline_${time}s`
        });
      }
    });
  });

  // Video play tracking
  const videoPlaceholder = document.querySelector('.video-placeholder');
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
      console.log('Video play clicked');

      // Track analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'video_play', {
          'event_category': 'engagement',
          'event_label': 'demo_video'
        });
      }

      // Here you would replace the placeholder with actual video
      alert('Demo-Video würde hier starten. Bitte fügen Sie Ihre Video-URL ein.');
    });
  }

  // Learn more buttons
  const learnMoreButtons = document.querySelectorAll('.btn-learn-more');
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const pillarCard = this.closest('.pillar-card');
      const pillarType = pillarCard ? pillarCard.dataset.pillar : 'unknown';

      console.log(`Learn more clicked: ${pillarType}`);

      // Track analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'learn_more_click', {
          'event_category': 'engagement',
          'event_label': pillarType
        });
      }

      // Expand details or navigate
      alert(`Mehr Informationen über ${pillarType} werden hier angezeigt.`);
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe all pillar cards
  document.querySelectorAll('.pillar-card').forEach(card => {
    observer.observe(card);
  });

  // Observe validation items
  document.querySelectorAll('.validation-item').forEach(item => {
    observer.observe(item);
  });

  // Navigation scroll effect
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  // Tech details tracking
  const techDetails = document.querySelector('.demo-tech-details');
  if (techDetails) {
    techDetails.addEventListener('toggle', function() {
      if (this.open) {
        console.log('Tech details opened');

        if (typeof gtag !== 'undefined') {
          gtag('event', 'tech_details_open', {
            'event_category': 'engagement',
            'event_label': 'demo_section'
          });
        }
      }
    });
  }

  // Comparison table interactions
  const comparisonRows = document.querySelectorAll('.comparison-table tbody tr');
  comparisonRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'rgba(0, 217, 255, 0.05)';
    });

    row.addEventListener('mouseleave', function() {
      if (!this.classList.contains('highlight-row')) {
        this.style.backgroundColor = '';
      }
    });
  });

  // Page load analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      'page_title': document.title,
      'page_location': window.location.href,
      'page_path': window.location.pathname
    });
  }

  console.log('HAVENIS AI website initialized');
});

// Add fade-in animation class
const style = document.createElement('style');
style.textContent = `
  .pillar-card,
  .validation-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .pillar-card.fade-in,
  .validation-item.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .navbar {
    transition: transform 0.3s ease;
  }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('mobile-active');
  }
}

// Export functions for global access
window.scrollToDemo = scrollToDemo;
window.toggleMobileMenu = toggleMobileMenu;
