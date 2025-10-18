const root = document.documentElement;

const motionDisabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

root.addEventListener('click', () => {
  root.style.setProperty('--mouse-x', `${event.clientX}px`);
  root.style.setProperty('--mouse-y', `${event.clientY}px`);

  if (!document.startViewTransition || motionDisabled) toggleTheme();
  else document.startViewTransition(toggleTheme);
});

function toggleTheme() {
  root.classList.toggle('dark');
}

// Initial theme based on system preference
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.classList.toggle('dark', defaultDark);
