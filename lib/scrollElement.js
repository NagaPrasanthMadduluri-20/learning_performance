
  export function scrollToElement(elementId) {
    if (typeof window !== 'undefined') {
      const target = document.getElementById(elementId);
      if (target) {
        const navbarHeight = 93; // Height of your navbar in pixels
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }