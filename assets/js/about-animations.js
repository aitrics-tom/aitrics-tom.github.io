// About page animations and interactions
document.addEventListener('DOMContentLoaded', function() {
  // Fade in animation for sections
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in class to elements
  const fadeElements = document.querySelectorAll('.profile, .news-item, .post-preview, .publication, .social, h2');
  fadeElements.forEach(el => {
    el.classList.add('fade-in-element');
    observer.observe(el);
  });

  // Smooth hover effect for profile image
  const profileImg = document.querySelector('.profile img');
  if (profileImg) {
    profileImg.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    profileImg.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  }

  // Parallax effect for background
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxBg = document.querySelector('.post.about-page::before');
      if (parallaxBg) {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        document.documentElement.style.setProperty('--parallax-y', `${yPos}px`);
      }
    });
  }

  // Typing effect for subtitle
  const subtitle = document.querySelector('.post-header .desc');
  if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';
    
    let index = 0;
    const typeWriter = () => {
      if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      }
    };
    
    setTimeout(typeWriter, 500);
  }

  // Add hover effect to social icons
  const socialIcons = document.querySelectorAll('.contact-icons a');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.1) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
  });
});