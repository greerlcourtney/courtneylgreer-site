import { useRef, useEffect } from 'react';
import { track } from '@vercel/analytics';

export default function useSectionTimeTrack(sectionName) {
  const ref = useRef(null);
  const enteredAt = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enteredAt.current = Date.now();
        } else if (enteredAt.current) {
          const seconds = Math.round((Date.now() - enteredAt.current) / 1000);
          if (seconds > 2) {
            track('section_time', { section: sectionName, seconds });
          }
          enteredAt.current = null;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}
