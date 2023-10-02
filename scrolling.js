document.addEventListener('DOMContentLoaded', function() {
  const scrollToIntroButton = document.getElementById('scroll-to-intro');
  const scrollToExpButton = document.getElementById('scroll-to-exp');
  const scrollToProjectsButton = document.getElementById('scroll-to-projects');
  const scrollToContactButton = document.getElementById('scroll-to-contact');

  const introSection = document.getElementById('intro');
  const expSection = document.getElementById('exp');
  const projectsSection = document.getElementById('projects');
  const aboutSection = document.getElementById('contact');

  scrollToIntroButton.addEventListener('click', () => {
    const top = introSection.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  scrollToExpButton.addEventListener('click', () => {
    const top = expSection.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  scrollToProjectsButton.addEventListener('click', () => {
    const top = projectsSection.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  scrollToContactButton.addEventListener('click', () => {
    const top = aboutSection.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
