
// Set current year in copyright
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
});

// You could add navigation handling here if needed
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    // For a single page application, you might want to prevent default
    // and handle navigation with JavaScript
    
    // Example:
    // e.preventDefault();
    // const href = this.getAttribute('href');
    // navigateTo(href);
  });
});

// Example navigation function for a single page app
function navigateTo(path) {
  // Update browser history
  history.pushState(null, null, path);
  
  // You would then need to load the appropriate content
  // based on the path
  
  console.log(`Navigated to: ${path}`);
  
  // In a real implementation, you might fetch content or 
  // change what's displayed based on the path
}
