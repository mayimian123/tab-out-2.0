# Tab Out 2.0

A Chrome extension that replaces the new tab page with a clean dashboard of your open tabs, grouped by domain.

This is a fork of [Tab Out](https://github.com/zarazhangrui/tab-out) by [Zara Zhang](https://x.com/zarazhangrui), rewritten with a full settings system, theme support, smart live updates, a to-do list, and several bug fixes over the original.

---

[English](#features) · [中文介绍](#中文介绍)

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

---

## 中文介绍

Tab Out 2.0 是一个 Chrome 扩展，把新标签页替换成一个干净的标签页管理面板。所有打开的标签按域名分组显示，让你在每次开新标签的时候都清楚自己手上有什么。

这是在 [Zara Zhang](https://x.com/zarazhangrui) 原版 Tab Out 基础上的二次开发，重写了核心逻辑，新增了待办清单、设置面板、深色主题等功能。

### 核心功能

**待办清单（左列）**
打开新标签就能看到你当前最重要的事情。在输入框里打字按回车添加任务，最新的显示在最顶部。打勾后文字会划线停留 1.5 秒，然后自动归档到"已完成"区域（折叠显示，可以点开查看并删除）。鼠标悬停在任何任务上，右边会出现 ✕，点击直接删除。

**标签页面板（右列）**
所有打开的标签按域名分组，自动检测重复标签并标注。点击某个标签可以直接跳过去，也可以点 ✕ 关闭单个标签，或者一键关闭整个域名下的所有标签。顶部有实时搜索栏，按 `/` 聚焦，按 `Esc` 清除。

**快捷链接栏**
页面顶部固定显示你常用的网站，默认包含 Gmail、X、GitHub、LinkedIn、YouTube。可以在设置里添加任意网站（粘贴网址即可自动识别）、删除，或者直接拖拽调整顺序。

**稍后再看**
打开某个标签时觉得现在没时间看，可以把它"存起来"——它会被加入右侧清单，标签本身会关闭。处理完后打勾，有 5 秒撤销窗口。已完成的条目进入归档，可以随时单独恢复，也可以一键全部清除。30 天以上的归档记录会自动清理。

**主题与个性化**
右下角切换深色 / 浅色主题，跨会话保存。在设置里填上你的名字，问候语就会变成"Good morning, Lauren"。还可以加一行个人备注，显示在日期下方。

### 安装方法

1. 下载或克隆本仓库
2. 打开 `chrome://extensions`，开启右上角的**开发者模式**
3. 点击**加载已解压的扩展程序**，选择 `extension/` 文件夹
4. 打开新标签页即可使用

无需构建，无需 npm，纯 Chrome Manifest V3 扩展。

### 数据说明

所有数据存储在 `chrome.storage.local`，完全本地，不会上传到任何服务器。唯一的外部请求是通过 Google 的 favicon 服务加载快捷链接的网站图标。
