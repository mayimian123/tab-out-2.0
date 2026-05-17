# Tab Out 2.0

A Chrome extension that replaces the new tab page with a clean dashboard of your open tabs, grouped by domain.

This is a fork of [Tab Out](https://github.com/zarazhangrui/tab-out) by [Zara Zhang](https://x.com/zarazhangrui), rewritten and extended with a full settings system, theme support, smart live updates, and more.

---

## What's new in 2.0

| Feature | 1.0 (original) | 2.0 (this fork) |
|---|---|---|
| Theme | Light only | Dark / Light toggle, persists across sessions |
| Quick links bar | Fixed sites (Gmail, X, GitHub…) hard-coded | Fully customizable — add, remove, or drag-to-reorder from the settings panel |
| Tab display | First 8 tabs per domain, "+N more" button | All tabs shown, no truncation |
| Dashboard updates | Manual page refresh required | Auto-refreshes when tabs open, close, or switch |
| Tab search | None | Real-time search in the header; press `/` to focus, `Esc` to clear |
| Keyboard shortcuts | None | `/` → focus search, `Esc` → clear search / close settings |
| Saved for later | Check off to archive, no way back | Check off with 5-second undo toast; restore individual items from the archive |
| Archive management | Manual only | Auto-prunes items older than 30 days; one-click "Clear archive" in settings |
| Personalization | None | Set your name (shown in greeting) and a personal note below the date |
| Refresh behavior | Full page repaint on every update | Smart DOM diff — only changed cards update; new cards fade in, changed cards flash |
| Quick links reordering | Not available | Drag-and-drop to reorder |
| Sound & confetti on close | Yes (Web Audio API) | Removed for a calmer experience |
| Settings panel | None | Full settings panel (slides up from footer) |

---

## Features at a glance

**Dashboard**
- Open tabs grouped by domain, sorted by number of tabs
- Duplicate tabs detected and badged
- Localhost tabs show port numbers so you can tell projects apart
- Close an entire domain's tabs in one click

**Quick Links bar**
- Pinned sites always visible at the top (Gmail, X, GitHub, LinkedIn, YouTube by default)
- Add any site via settings, or paste a URL to auto-detect the hostname
- Drag chips left and right to reorder

**Saved for Later**
- Bookmark a tab before closing it to a persistent checklist
- Check it off when done — with a 5-second undo window
- Checked items move to an archive; restore any item individually
- Archive auto-clears entries older than 30 days

**Settings panel**
- Dark / light theme toggle
- Manage quick-links sites (add, remove, reorder)
- Personal greeting: set your name and a short note
- Clear archive button

---

## Install

1. Clone or download this repo
2. Open `chrome://extensions` and enable **Developer mode**
3. Click **Load unpacked** and select the `extension/` folder
4. Open a new tab — you're in

---

## Tech

Pure Chrome Manifest V3 extension. Vanilla JS, no build tools, no npm. All data stored in `chrome.storage.local` — nothing leaves your browser.

---

## Credits

Original extension: [zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out)
