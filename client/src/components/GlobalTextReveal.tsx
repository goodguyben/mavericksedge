
import React, { useEffect } from 'react';
import ScrollReveal from './ui/ScrollReveal';

/**
 * Global component that automatically applies scroll reveal to common text elements
 * across all pages. This component should be included in the Layout.
 */
export default function GlobalTextReveal() {
  useEffect(() => {
    // Add scroll reveal to dynamically created text elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            
            // Find text elements that don't already have scroll reveal
            const textElements = element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span');
            textElements.forEach((textEl) => {
              if (!textEl.closest('[data-scroll-reveal]')) {
                textEl.setAttribute('data-scroll-reveal', 'true');
              }
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
