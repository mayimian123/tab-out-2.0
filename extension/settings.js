// extension/settings.js
'use strict';

const SETTINGS_DEFAULTS = {
  theme: 'system',
  homepageSites: [
    { hostname: 'mail.google.com', label: 'Gmail',    pathPrefix: '/', excludeHash: ['inbox/', 'sent/', 'search/'] },
    { hostname: 'x.com',           label: 'X',        pathExact: ['/home'] },
    { hostname: 'www.linkedin.com', label: 'LinkedIn', pathExact: ['/'] },
    { hostname: 'github.com',      label: 'GitHub',   pathExact: ['/'] },
    { hostname: 'www.youtube.com', label: 'YouTube',  pathExact: ['/'] },
  ],
};

async function getSettings() {
  const { settings } = await chrome.storage.local.get('settings');
  return {
    ...SETTINGS_DEFAULTS,
    ...settings,
    // deep-merge homepageSites only if user has customized it
    homepageSites: (settings && settings.homepageSites) ? settings.homepageSites : SETTINGS_DEFAULTS.homepageSites,
  };
}

async function saveSettings(patch) {
  const current = await getSettings();
  await chrome.storage.local.set({ settings: { ...current, ...patch } });
}

async function addHomepageSite(hostname, label) {
  const s = await getSettings();
  if (s.homepageSites.some(r => r.hostname === hostname)) return;
  s.homepageSites.push({ hostname, label });
  await saveSettings({ homepageSites: s.homepageSites });
}

async function removeHomepageSite(hostname) {
  const s = await getSettings();
  await saveSettings({ homepageSites: s.homepageSites.filter(r => r.hostname !== hostname) });
}

async function pruneArchive() {
  const { deferred = [] } = await chrome.storage.local.get('deferred');
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const pruned = deferred.filter(t => {
    if (!t.completed) return true;
    const ms = t.completedAt ? new Date(t.completedAt).getTime() : 0;
    return ms > cutoff;
  });
  if (pruned.length !== deferred.length) {
    await chrome.storage.local.set({ deferred: pruned });
  }
}

async function clearArchive() {
  const { deferred = [] } = await chrome.storage.local.get('deferred');
  const updated = deferred.map(t => t.completed ? { ...t, dismissed: true } : t);
  await chrome.storage.local.set({ deferred: updated });
}

async function initSettings() {
  await pruneArchive();
}

/**
 * isLandingPage(url, sites)
 *
 * Returns true if the given URL matches any rule in the sites array.
 * Handles both the new schema (pathExact, pathPrefix, excludeHash) and
 * the legacy LOCAL_LANDING_PAGE_PATTERNS format (test fn, hostnameEndsWith).
 */
function isLandingPage(url, sites) {
  try {
    const parsed = new URL(url);
    return sites.some(rule => {
      const hostnameMatch = rule.hostname
        ? parsed.hostname === rule.hostname
        : rule.hostnameEndsWith
          ? parsed.hostname.endsWith(rule.hostnameEndsWith)
          : false;
      if (!hostnameMatch) return false;
      if (rule.excludeHash) {
        const hash = parsed.hash || '';
        if (rule.excludeHash.some(h => hash.includes(h))) return false;
      }
      if (rule.test)       return rule.test(parsed.pathname, url);
      if (rule.pathPrefix) return parsed.pathname.startsWith(rule.pathPrefix);
      if (rule.pathExact)  return rule.pathExact.includes(parsed.pathname);
      return parsed.pathname === '/';
    });
  } catch { return false; }
}
