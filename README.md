# Windows 98 Mini Homepage

This project aims to recreate a small homepage with a classic Windows 98 look. Documentation lives alongside code so both humans and the AI can follow the design.

## Development Plan

1. Set up the base HTML layout with a Windows 98 theme.
2. Use modular UI components such as the taskbar, start menu and windows.
3. Write design details for each component in `component.md` before coding.
4. Keep this README updated with milestones and goals.
5. Store project images inside `src/assets/images/`.

All markdown files serve as a shared medium for design discussions.
The overall component hierarchy is documented in `architecture.md` and each
component is described in detail inside `component.md`.

## Architecture Overview

1. **Hybrid SPA/MPA**
   - Some icons open modal windows on the same page.
   - Others route to separate pages.
2. **Component-based UI**
   - Every visible element is a component driven by props and context.
3. **Configuration Files**
   - Icons, wallpapers and cursors defined in static JSON or TS config.
4. **State Management**
   - Start with React Context for menus and modals; allow swapping to Zustand later.
5. **Routing and Build**
   - GitHub Pages hosts the site built with Vite. Pages live under `pages/`.

### Core Design Principles

1. **Data driven UI** – icon and window definitions come from config.
2. **Component centric with abstracted state** – each part is independent but uses shared context.
3. **Flexible structure first** – start with placeholder components to keep the architecture open.

## Quick Start

1. Run `tsc` to compile TypeScript sources.
2. Open `index.html` in a browser to see **Hello World**.

