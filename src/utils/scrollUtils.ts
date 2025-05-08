/**
 * Scroll utilities to help with navigation
 */

// Navbar height offset in pixels
const NAVBAR_OFFSET = 80;

/**
 * Simple direct scroll to an element by ID
 */
export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Get the offset top position of an element
 */
export const getElementOffsetTop = (elementId: string): number => {
  const element = document.getElementById(elementId);
  if (!element) return 0;
  
  return element.getBoundingClientRect().top + window.pageYOffset;
};

/**
 * Check if an element is in the viewport
 */
export const isElementInViewport = (elementId: string): boolean => {
  const element = document.getElementById(elementId);
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight / 2) &&
    rect.bottom >= NAVBAR_OFFSET
  );
}; 