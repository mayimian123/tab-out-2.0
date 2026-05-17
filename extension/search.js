// extension/search.js
'use strict';

function filterTabs(query) {
  const q = query.trim().toLowerCase();

  document.querySelectorAll('.mission-card').forEach(card => {
    let cardHasMatch = false;

    // Check visible chips and overflow chips
    card.querySelectorAll('.page-chip[data-action="focus-tab"], .page-chips-overflow .page-chip').forEach(chip => {
      const text = (chip.querySelector('.chip-text')?.textContent || '').toLowerCase();
      const url  = (chip.dataset.tabUrl || '').toLowerCase();
      const matches = !q || text.includes(q) || url.includes(q);
      chip.style.display = matches ? '' : 'none';
      if (matches) cardHasMatch = true;
    });

    // Hide card when no chips match (cards always have chips in practice)
    card.style.display = (q && !cardHasMatch) ? 'none' : '';
  });
}

function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', () => filterTabs(input.value));

  document.addEventListener('keydown', e => {
    const tag = document.activeElement?.tagName;
    const inInput = tag === 'INPUT' || tag === 'TEXTAREA';

    // '/' — focus search
    if (e.key === '/' && !inInput) {
      e.preventDefault();
      input.focus();
      input.select();
      return;
    }

    // Escape — clear search or close settings panel
    if (e.key === 'Escape') {
      const panel = document.getElementById('settingsPanel');
      if (panel?.classList.contains('open')) {
        if (typeof closeSettingsPanel === 'function') closeSettingsPanel();
        return;
      }
      if (document.activeElement === input) {
        input.value = '';
        filterTabs('');
        input.blur();
      }
    }
  });
}
