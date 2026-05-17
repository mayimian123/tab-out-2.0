// extension/theme.js
'use strict';

// Depends on globals from settings.js (loaded before this script):
// getSettings(), saveSettings()

function applyTheme(theme) {
  const effective = theme === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;
  document.documentElement.dataset.theme = effective;
  const icon = document.getElementById('themeToggleIcon');
  if (icon) icon.textContent = { dark: '🌙', light: '☀️', system: '💻' }[theme] ?? '💻';
}

async function cycleTheme() {
  const s = await getSettings();
  const next = { system: 'light', light: 'dark', dark: 'system' }[s.theme] ?? 'system';
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
