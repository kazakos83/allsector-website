/**
 * Utility function to handle smooth scrolling to contact section
 * with proper offset for fixed headers
 */

export const scrollToContact = (event?: Event) => {
  if (event) {
    event.preventDefault();
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const headerHeight = 80; // Adjust based on your header height
    const elementPosition = contactSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    // If contact section not found on current page, navigate to contact page
    window.location.href = '/contact';
  }
};

/**
 * Initialize smooth scroll handlers for all quote buttons
 */
export const initializeQuoteButtons = () => {
  // Handle all buttons with smooth-scroll class
  const smoothScrollButtons = document.querySelectorAll('.smooth-scroll');
  
  smoothScrollButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const href = (button as HTMLAnchorElement).getAttribute('href');
      
      if (href === '#contact') {
        event.preventDefault();
        scrollToContact();
      }
    });
  });

  // Handle quote buttons specifically
  const quoteButtons = document.querySelectorAll('a[href="#contact"]');
  
  quoteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      scrollToContact();
      
      // Optional: Track button clicks for analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'get_quote_button',
          value: 1
        });
      }
    });
  });
};

/**
 * Fallback function for browsers that don't support smooth scrolling
 */
export const scrollToContactFallback = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView();
  }
};