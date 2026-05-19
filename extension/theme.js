// extension/theme.js
'use strict';

// Depends on globals from settings.js (loaded before this script):
// getSettings(), saveSettings()

const THEME_ICONS = { light: '☀️', dark: '🌙', midnight: '✦' };
const THEME_ORDER = ['light', 'dark', 'midnight'];

function applyTheme(theme) {
  const effective = theme === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;
  document.documentElement.dataset.theme = effective;
  const icon = document.getElementById('themeToggleIcon');
  if (icon) icon.textContent = THEME_ICONS[effective] ?? '☀️';
}

async function cycleTheme() {
  const s = await getSettings();
  const effective = s.theme === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : s.theme;
  const idx  = THEME_ORDER.indexOf(effective);
  const next = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
  await saveSettings({ theme: next });
  applyTheme(next);
}

// Apply theme immediately on load
(async () => {
  const s = await getSettings();
  applyTheme(s.theme);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', async () => {
    const current = await getSettings();
    if (current.theme === 'system') applyTheme('system');
  });
})();
