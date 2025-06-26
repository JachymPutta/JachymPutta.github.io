
document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = {
    'scroll-to-intro': 'intro',
    'scroll-to-research': 'research',
    'scroll-to-open-source': 'open-source',
    'scroll-to-contact': 'contact'
  };

  Object.keys(scrollLinks).forEach(linkId => {
    const button = document.getElementById(linkId);
    const section = document.getElementById(scrollLinks[linkId]);
    if (button && section) {
      button.addEventListener('click', () => {
        window.scrollTo({ top: section.offsetTop - 70, behavior: 'smooth' });
      });
    }
  });
});
