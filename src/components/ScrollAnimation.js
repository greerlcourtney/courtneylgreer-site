import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    let cancelled = false;
    const cleanupRef = { observer: null };

    // Defer setup by one frame so the new route's DOM is painted
    requestAnimationFrame(() => {
      if (cancelled) return;

      // === TEXT REVEAL ANIMATION ===
      const revealElements = document.querySelectorAll('.text-reveal');

      revealElements.forEach(element => {
        // Skip elements that have already been processed
        if (element.querySelector('.word')) return;

        const text = element.textContent;
        element.innerHTML = '';

        const words = text.split(' ');
        words.forEach((word, index) => {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'word';
          wordSpan.textContent = word;
          wordSpan.style.transitionDelay = `${index * 0.08}s`;
          element.appendChild(wordSpan);

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

      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
      document.querySelectorAll('.text-reveal').forEach(el => observer.observe(el));

      cleanupRef.observer = observer;
    });

    // === PROGRESS LINE ===
    const progressLine = document.querySelector('.progress-line');

    const updateProgressLine = () => {
      if (!progressLine) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      progressLine.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', updateProgressLine, { passive: true });
    updateProgressLine();

    return () => {
      cancelled = true;
      if (cleanupRef.observer) {
        document.querySelectorAll('.fade-in, .text-reveal').forEach(el => {
          cleanupRef.observer.unobserve(el);
        });
      }
      window.removeEventListener('scroll', updateProgressLine);
    };
  }, []);

  return null;
};

export default ScrollAnimation;
