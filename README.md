# Grand Slam Rally

Grand Slam Rally is a responsive, browser-based tennis arcade game inspired by the atmosphere of the global tennis circuit. It runs as a lightweight static web app using HTML, CSS, JavaScript, and the Canvas API.

## Play online

https://matrix36912.github.io/grand-slam-rally/

## Features

- You vs Computer and Two players modes
- Computer opponent with predictive movement
- Keyboard, touch, and on-screen controls
- Five court themes:
  - United Kingdom grass
  - France clay
  - United States hard court
  - Australia blue hard court
  - Japan night court
- Selectable international tennis roster with stylized avatars
- Player strengths and weaknesses
- Slice, Topspin, and Lob shot types
- Serve, rally, scoring, timer, and winner celebration
- Responsive layout for desktop, tablet, and mobile screens
- Fixed viewport layout designed to prevent accidental page scrolling
- Fullscreen mode
- Installable web-app metadata through `manifest.webmanifest`

## How to play

1. Choose a game mode, court theme, and players.
2. Select **Start Match**.
3. Press **SERVE** or the **Space** key.
4. Position your player under the ball.
5. Choose a shot and return the ball.
6. The first player to reach 7 points wins.

### Controls

| Action | Left player | Right player |
| --- | --- | --- |
| Move up | `W` or touch up button | `Arrow Up` or touch up button |
| Move down | `S` or touch down button | `Arrow Down` or touch down button |
| Serve / hit | `Space` or `SERVE` | `Space` or `SERVE` |
| Shot selection | `SLICE`, `TOPSPIN`, or `LOB` | `SLICE`, `TOPSPIN`, or `LOB` |

In **You vs Computer** mode, the right player is controlled by the computer. In **Two players** mode, both players can be controlled locally.

## Run locally

The app has no build step and no external package dependencies.

### Option 1: Python

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

http://localhost:8000/

### Option 2: Node.js

If you have the `serve` package available:

```bash
npx serve .
```

Open the URL shown in the terminal.

### Option 3: VS Code Live Server

1. Install the **Live Server** extension.
2. Open the project folder in VS Code.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

Opening `index.html` directly may work, but using a local HTTP server is recommended for consistent browser behavior and web-app manifest loading.

## Browser support

Use a current version of Chrome, Edge, Firefox, or Safari. Fullscreen support depends on browser permissions and device policies.

The player avatars are stylized game graphics inspired by public playing styles. They do not reproduce real athletes or likenesses. Player information is presented for arcade-game flavor rather than official rankings or live performance data.

