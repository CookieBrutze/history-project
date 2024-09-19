function setupFAQ(sectionSelector) {
    const faqSection = document.querySelector(sectionSelector);
    if (!faqSection) return; // If no FAQ section found, exit
  
    faqSection.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  }
  
  // Initialize the FAQ for the '.faq' section (you can pass different selectors for different sections)
  setupFAQ('.faq');
  