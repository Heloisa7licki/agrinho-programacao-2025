document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.hasAttribute('hidden')) {
      menu.removeAttribute('hidden');
      menuToggle.setAttribute('aria-expanded', 'true');
    } else {
      menu.setAttribute('hidden', '');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('click', () => {
    if (!menu.hasAttribute('hidden')) {
      menu.setAttribute('hidden', '');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
