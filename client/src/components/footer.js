/**
 * Footer Module - Handles the initialization and functionality of the footer
 */

// Initialize when DOM is loaded or function is called
function init() {
  updateCurrentYear();
  createLogoInFooter();
  setupEventListeners();
}

/**
 * Updates the year in the copyright text
 */
function updateCurrentYear() {
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Creates and inserts the logo into the footer
 */
function createLogoInFooter() {
  const logoContainer = document.querySelector('.footer-logo');
  if (logoContainer) {
    createLogo(logoContainer);
  }
}

/**
 * Creates a logo element and adds it to the specified container
 * @param {HTMLElement} container - The container to add the logo to
 */
function createLogo(container) {
  // Create wrapper with flex display for logo and text
  const wrapper = document.createElement('div');
  wrapper.className = 'logo-wrapper';
  wrapper.style.display = 'flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.justifyContent = 'center';
  wrapper.style.gap = '1rem';
  
  // Create logo image
  const img = document.createElement('img');
  img.src = '/attached_assets/logo_dyn-transparent-thumb2x.png';
  img.alt = 'Mavericks Edge Logo';
  img.style.width = '80px';
  img.style.height = 'auto';
  
  // Create logo text with Raleway font
  const text = document.createElement('span');
  text.innerText = 'Mavericks Edge';
  text.style.fontFamily = 'Raleway, sans-serif';
  text.style.fontSize = '1.5rem';
  text.style.fontWeight = 'bold';
  text.style.color = '#FF5630'; // Maverick orange
  
  // Append elements
  wrapper.appendChild(img);
  wrapper.appendChild(text);
  container.appendChild(wrapper);
}

/**
 * Sets up event listeners for footer elements
 */
function setupEventListeners() {
  // Add event listeners to navigation links
  const navLinks = document.querySelectorAll('.footer-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Use standard link behavior, as we're using a SPA framework
      // which will handle the navigation
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export for module use if needed
export function initFooter() {
  init();
  console.log('Footer initialized via exported function');
}

// Also make available globally for script tag loading
window.initFooter = initFooter;