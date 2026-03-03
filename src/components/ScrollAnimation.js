import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    // === TEXT REVEAL ANIMATION ===
    const revealElements = document.querySelectorAll('.text-reveal');

    revealElements.forEach(element => {
      const text = element.textContent;
      element.innerHTML = '';

      // Split into words and wrap each
      const words = text.split(' ');
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.textContent = word;
        wordSpan.style.transitionDelay = `${index * 0.08}s`;
        element.appendChild(wordSpan);

        // Add space after word (except last)
        if (index < words.length - 1) {
          element.appendChild(document.createTextNode(' '));
        }
      });
    });

    // === INTERSECTION OBSERVER FOR ANIMATIONS ===
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          // For text reveal, trigger word animations
          if (entry.target.classList.contains('text-reveal')) {
            const words = entry.target.querySelectorAll('.word');
            words.forEach(word => {
              word.classList.add('revealed');
            });
          }

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Observe text reveal elements
    document.querySelectorAll('.text-reveal').forEach(el => observer.observe(el));

    // === PROGRESS LINE ===
    const progressLine = document.querySelector('.progress-line');

    const updateProgressLine = () => {
      if (!progressLine) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      progressLine.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', updateProgressLine, { passive: true });
    updateProgressLine();

    // Cleanup
    return () => {
      document.querySelectorAll('.fade-in, .text-reveal').forEach(el => {
        observer.unobserve(el);
      });
      window.removeEventListener('scroll', updateProgressLine);
    };
  }, []);

  return null;
};

export default ScrollAnimation;
