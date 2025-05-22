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
