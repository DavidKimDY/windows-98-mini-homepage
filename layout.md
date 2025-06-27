# Layout Overview

The project follows a component hierarchy inspired by Windows 98.
This file records how components fit together so that everyone can easily keep
track of the structure.

```
<App>
 ├── <Wallpaper />           // background image
 ├── <Desktop>
 │     └── <DesktopIcon />   // multiple icons
 ├── <WindowArea>            // container for open windows
 │     └── <WindowModal />
 ├── <Taskbar>
 │     ├── <StartButton />
 │     ├── <OpenedWindowsList />
 │     └── <TimeDisplay />
 ├── <StartMenu />           // start menu dropdown
 ├── <ContextMenu />         // right-click menu
 ├── <PointerTheme />        // custom cursor rendering
 └── <RouteManager />        // handles external page routing
```

The order here reflects how the main application composes its interface. Each
component will have an entry in `component.md` describing its purpose and any
props or state requirements.
