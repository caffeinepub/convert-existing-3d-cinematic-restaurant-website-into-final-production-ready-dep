export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navbarHeight = 80; // Height of fixed navbar
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
