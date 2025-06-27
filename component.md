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
- Classic Windows 98 style window.
- Receives content and controls from props.

## Taskbar
- Fixed bar at the bottom of the screen.
- Hosts `StartButton`, `OpenedWindowsList` and `TimeDisplay`.

### StartButton
- Opens the `StartMenu` when clicked.

### OpenedWindowsList
- Displays currently open windows for quick switching.

### TimeDisplay
- Shows the current time, formatted like the original OS clock.

## StartMenu
- Pop-up menu for launching programs or opening links defined in config.

## ContextMenu
- Right-click menu providing actions based on the clicked area.

## PointerTheme
- Renders custom cursor icons; managed globally.

## RouteManager
- Handles navigation to external pages while keeping internal state intact.

Future components or updates should extend this file with additional notes.
