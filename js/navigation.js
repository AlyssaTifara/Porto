function syncMobileMenu(menuToggle, navLinks) {
  const spans = menuToggle ? menuToggle.querySelectorAll('span') : [];
  const isOpen = navLinks.classList.contains('active');

  if (spans.length < 3) {
    return;
  }

  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none';
  spans[1].style.opacity = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
}

export function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      syncMobileMenu(menuToggle, navLinks);
    });

    navLinks.querySelectorAll('a').forEach((item) => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
          syncMobileMenu(menuToggle, navLinks);
        }
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') {
        return;
      }

      const target = document.getElementById(href.slice(1));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((item) => {
    const itemPath = item.getAttribute('href');
    item.classList.toggle('active', itemPath === currentLocation);
  });
}

document.addEventListener('DOMContentLoaded', initNavigation);
