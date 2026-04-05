
import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let currentId = '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentId = id;
          }
        }
      }
      
      // If we're at the very top, highlight the first section (usually home/hero)
      if (window.scrollY < 50 && sectionIds.length > 0) {
        currentId = sectionIds[0];
      }

      // If we're at the very bottom, highlight the last section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50 && sectionIds.length > 0) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
