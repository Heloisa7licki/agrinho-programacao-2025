const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const isHidden = menu.hasAttribute('hidden');
  if (isHidden) {
    menu.removeAttribute('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
  } else {
    menu.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
