export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    // Account for fixed header
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    // Use smoother easing for the domino animation
    if (id === "domino-animation") {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // For the domino animation, we want to continue scrolling to trigger the animation
      setTimeout(() => {
        window.scrollBy({
          top: 200, // Scroll a bit more to start the animation
          behavior: "smooth"
        });
      }, 800);
    } else {
      // Regular scrolling for other sections
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }
}
