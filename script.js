const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  menu.textContent = 'Menu +';
}
menu.hidden = false;
document.documentElement.classList.add('js-nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  menu.textContent = open ? 'Close −' : 'Menu +';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
