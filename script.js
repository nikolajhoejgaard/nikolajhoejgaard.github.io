// Accessible accordion for the "Read the case" panels.
// Each toggle button controls one panel via aria-expanded + the hidden attribute,
// so it works the same with a mouse, a keyboard, or a screen reader.

document.querySelectorAll('.case-toggle').forEach((button) => {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  const sign = button.querySelector('.sign');
  const label = button.querySelector('.label');

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
    sign.textContent = isOpen ? '+' : '\u2013';
    label.textContent = isOpen ? 'Read the case' : 'Close';
  });
});
