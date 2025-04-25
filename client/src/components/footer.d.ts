/**
 * Footer JavaScript module type definitions
 */

declare module './footer.js' {
  /**
   * Initializes the footer functionality 
   */
  export function initFooter(): void;
}

interface Window {
  initFooter?: () => void;
}