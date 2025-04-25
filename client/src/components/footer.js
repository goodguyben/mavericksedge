// Footer JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Set current year
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Create the logo element
  const logoContainer = document.querySelector('.footer-logo');
  if (logoContainer) {
    createLogo(logoContainer);
  }

  // Add event listeners to navigation links
  const navLinks = document.querySelectorAll('.footer-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // If we're using the same page for navigation without page reloads
      // We can add custom navigation logic here
      // e.preventDefault();
      // Example: window.navigate(this.getAttribute('href'));
    });
  });
});

/**
 * Creates a logo element and adds it to the specified container
 * @param {HTMLElement} container - The container to add the logo to
 */
function createLogo(container) {
  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'logo-wrapper';
  
  // Create logo image
  const img = document.createElement('img');
  img.src = '/assets/logo_dyn-transparent-thumb2x.png'; // Adjust path as needed
  img.alt = 'Mavericks Edge Logo';
  img.className = 'logo-image';
  
  // Create logo text
  const text = document.createElement('span');
  text.className = 'logo-text';
  text.textContent = 'Mavericks Edge';
  
  // Append elements
  wrapper.appendChild(img);
  wrapper.appendChild(text);
  container.appendChild(wrapper);
}

// Export for module use if needed
export function initFooter() {
  // Initialize any footer functionality
  console.log('Footer initialized');
}