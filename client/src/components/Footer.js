// Import necessary assets
import logoPath from '@assets/logo-transparent-thumb4x.png';
import '../styles/footer.css';

/**
 * Footer Module - Handles the initialization and functionality of the footer
 */
export const Footer = {
  /**
   * Initialize the footer
   */
  init() {
    this.insertFooterIntoDOM();
    this.updateCurrentYear();
    this.setupEventListeners();
  },

  /**
   * Insert the footer HTML into the DOM
   */
  async insertFooterIntoDOM() {
    try {
      // Fetch the footer HTML template
      const response = await fetch('/src/components/footer.html');
      const html = await response.text();
      
      // Parse HTML safely using DOMParser to prevent XSS
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const footer = doc.querySelector('footer');
      
      // Replace any existing footer or append to the end of the body
      const existingFooter = document.querySelector('footer');
      if (existingFooter) {
        existingFooter.replaceWith(footer);
      } else {
        document.body.appendChild(footer);
      }
      
      // Insert logo
      this.insertLogo();
    } catch (error) {
      console.error('Error loading footer:', error);
    }
  },

  /**
   * Insert the logo into the footer
   */
  insertLogo() {
    const logoContainer = document.querySelector('.footer-logo');
    if (logoContainer) {
      // Create logo wrapper
      const logoWrapper = document.createElement('div');
      logoWrapper.classList.add('logo-wrapper');
      
      // Create and setup logo image
      const logoImg = document.createElement('img');
      logoImg.src = logoPath;
      logoImg.alt = 'Mavericks Edge Logo';
      logoImg.classList.add('footer-logo-img');
      
      // Create logo text
      const logoText = document.createElement('span');
      logoText.textContent = 'Mavericks Edge';
      logoText.classList.add('footer-logo-text');
      
      // Append elements
      logoWrapper.appendChild(logoImg);
      logoWrapper.appendChild(logoText);
      logoContainer.appendChild(logoWrapper);
    }
  },

  /**
   * Update the current year in the copyright text
   */
  updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  },

  /**
   * Setup event listeners for footer elements
   */
  setupEventListeners() {
    // Example: Add analytics tracking to footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Example analytics tracking
        const linkText = link.textContent;
        const linkHref = link.getAttribute('href');
        console.log(`Footer link clicked: ${linkText} (${linkHref})`);
      });
    });
  }
};

// Auto-initialize when imported
document.addEventListener('DOMContentLoaded', () => {
  Footer.init();
});

// Export Footer module
export default Footer;