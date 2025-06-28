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

# Architecture & Design Decisions

## [1] WindowModal 구조
- 각 모달 창은 WindowModal 컴포넌트로 구성
- 내부 콘텐츠는 appType에 따라 분기 렌더링
- 각 앱은 src/apps/ 폴더에 개별 컴포넌트로 관리

## [2] 상태 관리
- 초기에 React Context로 상태 구성
- store/ 디렉토리 내부에 context 파일로 관리
- 향후 상태가 복잡해질 경우 Zustand 등 도입을 고려
- store 구조는 Context API ↔️ Zustand 전환에 유연하게 설계

## Directory Structure

```
src/
├── assets/                # 이미지, 폰트, 아이콘 등 정적 리소스
│   ├── wallpapers/
│   ├── icons/
│   ├── images/
│   └── cursors/
│
├── components/            # 재사용 가능한 UI 컴포넌트
│   ├── DesktopIcon/
│   ├── WindowModal/
│   ├── Taskbar/
│   ├── StartMenu/
│   ├── ContextMenu/
│   └── common/            # 버튼, 카드 등 범용 구성요소
│
├── layout/                # 전체 구조 및 배치 담당
│   ├── AppLayout.tsx      # 전체 App의 뼈대
│   └── Wallpaper.tsx
│
├── apps/                  # 윈도우 내부 앱 구성
│   ├── Notepad/
│   ├── GalleryViewer/
│   └── ProfileEditor/
│
├── pages/                 # 완전히 다른 라우팅 페이지
│   ├── Home.tsx           # "/"에 해당
│   └── About.tsx
│
├── config/                # 아이콘, 배경화면 등 외부 설정 파일
│   ├── icons.ts
│   ├── wallpaper.ts
│   └── routes.ts
│
├── store/                 # 전역 상태 관리 (React Context or Zustand)
│   ├── windowStore.ts
│   ├── uiStore.ts
│   └── pointerStore.ts
│
├── hooks/                 # 커스텀 훅
│   └── useContextMenu.ts
│
├── styles/                # 전역 스타일, 테마, 폰트 설정
│   ├── global.css
│   └── themes/
│
└── main.tsx               # 앱 진입점
```

| 파일 | 역할 |
| -------------------------- | --------------------------------- |
| `src/main.tsx` | 앱 진입점 |
| `src/layout/AppLayout.tsx` | Wallpaper + Desktop + Taskbar 렌더링 |
| `src/store/windowStore.ts` | 열린 창 관리 (open, close, focus 등) |
| `src/store/uiStore.ts` | startMenu, contextMenu 상태 관리 |
| `src/config/icons.ts` | 아이콘 구성 정보 정의 |

| 컴포넌트 | 필요 기능 |
| ------------- | ----------------------- |
| `Wallpaper` | 배경화면 이미지 렌더링 |
| `Desktop` | 아이콘 표시, 우클릭 감지 |
| `DesktopIcon` | 클릭 시 모달 or 페이지 이동 |
| `WindowModal` | 창 UI (기본 위치, 드래그, 닫기) |
| `Taskbar` | 시작 버튼, 열린 창 표시 |
| `StartMenu` | 클릭 시 열림/닫힘 |
| `ContextMenu` | 우클릭 시 등장 (메뉴는 빈 껍데기 가능) |

| 앱 | 설명 |
| ------------ | ------------------------------- |
| `AppNotepad` | 간단한 텍스트 보여주는 창 (Hello World 수준) |

| 폴더 | 내용 |
| -------------------- | -------------------- |
| `assets/wallpapers/` | 기본 배경화면 이미지 1장 |
| `assets/icons/` | 메모장 아이콘 1개 |
| `assets/images/` | 기타 이미지 보관 |
| `styles/global.css` | 배경화면 전체 스타일, reset 등 |

