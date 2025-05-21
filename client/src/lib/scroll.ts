export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    // Account for fixed header
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

/**
 * Calculate opacity based on element's position in viewport
 * @param element DOM element to check
 * @param fadeSpeed How quickly the element fades (higher = faster fade)
 * @param fadeOffset When the fade should start (0-1)
 * @param fadeOutOnly Whether to only handle fade out
 */
export function calculateScrollOpacity(
  element: HTMLElement,
  fadeSpeed: number = 0.8,
  fadeOffset: number = 0.3,
  fadeOutOnly: boolean = false
): number {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const elementHeight = element.offsetHeight;
  
  // Calculate visibility percentage (how far through viewport the element is)
  const visiblePercent = (windowHeight - rect.top) / (elementHeight + windowHeight);
  
  if (fadeOutOnly) {
    // Only fade out as element scrolls up
    return Math.max(0, 1 - (visiblePercent - fadeOffset) * fadeSpeed);
  }
  
  // Handle both fade in and fade out
  if (visiblePercent < fadeOffset) {
    // Fade in as element enters viewport
    return Math.min(1, visiblePercent / fadeOffset);
  } else {
    // Fade out as element leaves viewport
    const fadeOutPercent = (visiblePercent - fadeOffset) / (1 - fadeOffset);
    return Math.max(0, 1 - fadeOutPercent * fadeSpeed);
  }
}
