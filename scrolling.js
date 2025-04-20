
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

  const goToBlogButton = document.getElementById('go-to-blog');
  if (goToBlogButton) {
    goToBlogButton.addEventListener('click', () => {
      window.location.href = 'pages/blog.html';
    });
  }
});
