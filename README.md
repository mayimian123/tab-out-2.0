# Tab Out 2.0

A Chrome extension that replaces the new tab page with a clean dashboard of your open tabs, grouped by domain.

This is a fork of [Tab Out](https://github.com/zarazhangrui/tab-out) by [Zara Zhang](https://x.com/zarazhangrui), rewritten with a full settings system, theme support, smart live updates, a to-do list, and several bug fixes over the original.

---

## What's new vs. the original

| Area | Original (1.0) | This fork (2.0) |
|---|---|---|
| **Layout** | Single column | Left: To-do + Saved for later · Right: Open tabs |
| **To-do list** | None | Persistent checklist — add, check off, archive done items |
| **Theme** | Light only | Dark / Light toggle, persists across sessions |
| **Quick links bar** | Fixed sites hard-coded | Fully customizable from Settings; drag-to-reorder |
| **Tab display** | First 8 tabs per domain, "+N more" | All tabs shown |
| **Auto-refresh** | Manual page refresh | Refreshes automatically on tab open/close; only changed cards update (no flash) |
| **Search** | None | Real-time header search; `/` to focus, `Esc` to clear |
| **Saved for later** | Check off → archive, no recovery | Check off with 5-second undo; restore individual items from archive |
| **Archive** | Manual clear only | Auto-prunes items older than 30 days; one-click clear in Settings |
| **Personalization** | None | Name shown in greeting; personal note line below the date |
| **Settings panel** | None | Slides up from footer — manage all of the above |
| **Sound & confetti** | On every tab close | Removed for a calmer experience |

---

## Features

### To-do list (left column)
- Type a task → press `Enter` to add (newest at top)
- Checkbox → 1.5-second strikethrough → moves to **Done** archive
- Hover over a task to reveal `✕` (instant delete)
- Done archive is collapsed by default; click to expand; `✕` each item to permanently remove

### Open tabs (right column)
- Grouped by domain; sorted by number of open tabs
- Duplicate tabs detected and badged
- Localhost tabs show port number so you can tell projects apart
- Close an entire domain in one click, or close individual tabs from the chip
- Keyboard: `/` focuses search, `Esc` clears it

### Quick links bar
- Pinned sites visible at the top (Gmail, X, GitHub, LinkedIn, YouTube by default)
- Add any site via Settings, or paste a URL to auto-detect the hostname
- Drag chips left/right to reorder; order persists

### Saved for later
- Bookmark a tab before closing it → added to a checklist
- Check off with a 5-second undo window
- Checked items go to archive; restore any item individually
- Archive auto-clears entries older than 30 days

### Settings panel (⚙️ bottom-right)
- Dark / light theme
- Manage quick-links sites (add, remove, drag-to-reorder)
- Personal greeting: name and a short note
- Clear archive button

---

## Things worth knowing

**Auto-refresh** — The dashboard updates automatically when any tab opens, closes, or finishes loading. Only the cards that actually changed are touched; the rest stay in place. If you have an active search, it's re-applied after each update.

**Multiple windows** — Notifications are sent to every open Tab Out page across all windows, not just the focused one.

**Saved-for-later vs. to-do** — "Saved for later" is for browser tabs you want to revisit later (it stores the URL). "To-do" is a plain text checklist unrelated to tabs — for tasks, reminders, whatever.

**Data storage** — Everything stays in `chrome.storage.local`. Nothing leaves your browser. Two storage keys: `deferred` (saved tabs) and `todos` (to-do items).

**Quick-links favicons** — Loaded from Google's favicon service (`www.google.com/s2/favicons`). This is the only external request the extension makes.

---

## Install

1. Clone or download this repo
2. Go to `chrome://extensions` and enable **Developer mode**
3. Click **Load unpacked** → select the `extension/` folder
4. Open a new tab

No build step. No npm. Pure Chrome Manifest V3.

---

## Credits

Original extension: [zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out)
