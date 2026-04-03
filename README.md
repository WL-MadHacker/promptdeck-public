# PromptDeck

**Your AI prompt clipboard — click, copy, done.**

PromptDeck is a desktop utility for anyone who works with AI tools. Save your favorite prompts, code snippets, checklists, and shortcuts — then copy any of them with a single click. No accounts, no cloud, no friction.

Built by [WayLucid](https://www.waylucid.com).

---

## Features

**Prompt Board** — Save and organize reusable prompts for Claude, ChatGPT, or any AI tool. Categories, search, drag-and-drop reorder.

**Skills Board** — A second board for code snippets, shell commands, checklists, and reference cards. Tag by language, type as snippet/checklist/reference.

**Themes** — Five built-in color themes (Dark Gold, Cobalt, Emerald, Rose, Light) plus a custom accent color picker. Your workspace, your look.

**Media Widgets** — Embedded YouTube and Spotify players in collapsible panels. Background music or tutorial videos while you work.

**One-Click Copy** — Click any card to instantly copy its text to your clipboard. Green flash confirms it worked.

**Import / Export** — Back up your library as JSON. Share prompt collections with your team. Import on any machine.

**Keyboard Shortcuts** — `Ctrl+K` to search, `Escape` to close modals. Fast and keyboard-friendly.

---

## Install

### Desktop App (Windows)

1. Download the latest release from [Releases](https://github.com/WL-MadHacker/promptdeck-public/releases)
2. Run `PromptDeck Setup.exe`
3. Launch from your taskbar

### Run from Source

```bash
git clone https://github.com/WL-MadHacker/promptdeck-public.git
cd promptdeck-public
npm install
npm start
```

### Build Installer

```bash
npm run installer
```

### Browser Version

Open `index.html` directly in any modern browser. All features work without Electron (except the frameless window chrome).

---

## Tech Stack

- **Electron** — Native desktop wrapper (frameless window, taskbar pinning)
- **Vanilla HTML/CSS/JS** — Zero dependencies, single-file architecture
- **localStorage** — All data stays on your machine
- **Google Fonts** — Outfit + DM Mono

---

## Data & Privacy

PromptDeck stores everything in your browser's `localStorage`. Nothing leaves your machine. No accounts, no telemetry, no analytics. Your prompts are yours.

---

## Part of the WayLucid Ecosystem

PromptDeck is a free, open-source tool from [WayLucid](https://www.waylucid.com) — building AI-native products for people who ship.

- [WayLucid](https://www.waylucid.com) — AI-native product studio
- [Dock](https://dock.waylucid.com) — Command center for AI workflows
- [App](https://app.waylucid.com) — WayLucid platform

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE)
