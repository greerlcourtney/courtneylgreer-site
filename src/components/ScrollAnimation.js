import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    // Intersection Observer setup
    const observerOptions = {
      root: null, // use viewport as root
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of element is visible
    };

    // Callback function when elements intersect
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once the animation has played, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target all paragraphs in the main-about-section
    const paragraphs = document.querySelectorAll('.main-about-section p');
    
    // Add the fade-in-section class and observe each paragraph
    paragraphs.forEach(paragraph => {
      paragraph.classList.add('fade-in-section');
      paragraph.style.visibility = 'visible'; // Make visible for intersection observer
      observer.observe(paragraph);
    });

    // Cleanup function
    return () => {
      paragraphs.forEach(paragraph => {
        observer.unobserve(paragraph);
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
};

export default ScrollAnimation;