# Component Design Notes

This document records each UI component used in the project.  All entries focus
on structure first, allowing features to evolve over time. Whenever new
components are introduced they should be added here and referenced in
`architecture.md`.

## Wallpaper
- Renders the desktop background image chosen from configuration.

## Desktop
- Container for all desktop icons.

## DesktopIcon
- Represents a single icon on the desktop.
- Behavior determined by `routeType` (`modal` or `external`).

## WindowArea
- Holds all active `WindowModal` components.
- Manages z-index stacking and window positioning via context.

## WindowModal
- Displays the title bar, a blank white content area and the status bar.
- Title bar shows an icon, label and three control buttons.
- Status bar contains help text and a drag handle graphic.
- Receives `title` and `onClose` props for dynamic use.

## Taskbar
- Fixed bar at the bottom of the screen.
- Hosts `StartButton`, `OpenedWindowsList` and `TimeDisplay`.

### StartButton
- Opens the `StartMenu` when clicked.

### OpenedWindowsList
- Displays currently open windows for quick switching.

### TimeDisplay
- Shows the current time in a small tray box with a 2px bevel.
- Hovering the clock reveals the full date as a tooltip.

## StartMenu
- Pop-up menu for launching programs or opening links defined in config.
- Left sidebar shows vertical "Windows" text on a navy background.
- Menu items list icons and labels; hover turns the row deep blue.
- For now it renders statically above the Start button.

## ContextMenu
- Right-click menu providing actions based on the clicked area.

## PointerTheme
- Renders custom cursor icons; managed globally.

## RouteManager
- Handles navigation to external pages while keeping internal state intact.

Future components or updates should extend this file with additional notes.
