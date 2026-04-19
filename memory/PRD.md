# PRD — Birthday Surprise for Hà

## Original Problem Statement
User (partner of Nguyễn Ngọc Hà / "Hà") asked for a beautiful birthday surprise landing page. In the current fork, the user requested:
- Scene-based navigation (not long scrolling)
- Background music after loading
- Secret password gate before entering
- Countdown timer to the birthday moment
- Envelope-opening animation for the letter
- Background music auto-play on entry
- Romantic vibe

User's preferred language: English for agent communication; app UI content is in Vietnamese (romantic tone).

## User Personas
- **Primary user (the sender / "anh")**: Boyfriend / partner preparing a surprise. Needs to customize content in `mock.js` (photos, letter, songs, password, birthday date, music URL).
- **Primary recipient (Hà)**: Will visit the link, type a secret password, then journey through seven romantic scenes.

## Core Requirements (from user)
1. Scene-based navigation with top nav + prev/next arrows + progress dots.
2. Romantic aesthetic (rose/pink palette, serif italic headlines — Cormorant Garamond, Dancing Script for signature).
3. Password gate with hint, Vietnamese-friendly normalization (lowercase, accent stripping).
4. Animated loading screen (0–100%).
5. Live countdown to Hà's birthday on the welcome scene; post-birthday celebratory message.
6. Envelope opens on click → reveals hand-written letter card with scroll.
7. Background audio element with user-gesture unlock + persistent floating player (play/pause, expand, track title).
8. Seven scenes: Welcome (+countdown) → Gallery → Moments timeline → Letter (envelope) → Music playlist → Video messages → Finale (blow-candle animation + confetti + wish message).
9. Keyboard navigation between scenes (←/→ arrows).

## Current Implementation (as of 2026-02-18)
- Fully frontend app; no backend needed yet (all data in `/app/frontend/src/mock.js`).
- Phase state machine in `App.js`: `gate → loading → experience`.
- Persistent `<audio>` element owned by `App.js` lives through phase changes; controls in `MusicPlayer.jsx`.
- Custom CSS animations in `index.css`: float-up, float-slow, bounce-slow, confetti, heartbeat, shimmer, scene-enter, petal-fall, glow-pulse.
- Envelope uses CSS flap + rotate with seal; opening fades envelope and scales the letter card in.
- Finale scene has interactive blow-the-candle — click cake to extinguish flame, trigger confetti, reveal wish message from "Người luôn yêu em".

## Files of Reference
- `/app/frontend/src/App.js` — phase machine + global audio element
- `/app/frontend/src/mock.js` — personalization data (password, birthday date, music URL, photos, moments, songs, letter, videos)
- `/app/frontend/src/index.css` — romantic theme, fonts, animations, envelope CSS
- `/app/frontend/src/components/PasswordGate.jsx`
- `/app/frontend/src/components/LoadingScreen.jsx`
- `/app/frontend/src/components/BirthdayExperience.jsx` — scene router, nav, dots
- `/app/frontend/src/components/MusicPlayer.jsx` — floating persistent player
- `/app/frontend/src/components/scenes/WelcomeScene.jsx` — countdown + hero
- `/app/frontend/src/components/scenes/GalleryScene.jsx` — photo grid + lightbox
- `/app/frontend/src/components/scenes/MomentsScene.jsx` — alternating timeline
- `/app/frontend/src/components/scenes/LetterScene.jsx` — envelope → letter card
- `/app/frontend/src/components/scenes/MusicScene.jsx` — playlist list + animated disc
- `/app/frontend/src/components/scenes/VideoScene.jsx` — video cards + modal placeholder
- `/app/frontend/src/components/scenes/FinaleScene.jsx` — cake + blow candle + confetti + wish

## Defaults to Customize
- Password: `hayeuanh` (in `mock.js → gate.password`)
- Birthday date: `2026-12-25T00:00:00` (in `mock.js → person.birthdayDate`) — REPLACE with Hà's real date
- Music URL: `https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3` — replace with your own MP3

## Backlog (Future / P2)
- Real backend (FastAPI + MongoDB) to support:
  - Upload photos & videos (object-storage integration)
  - Save/edit letter without redeploy
  - Shareable link with custom URL/slug (per-recipient page)
- Replace video modal with actual video playback once uploads are wired.
- Optional: Emergent Google Auth if multiple people can create their own birthday pages.
- Optional: add a "leave a wish" guestbook at the finale.

## Known Limitations
- Browser autoplay policy: audio tries to play right after the unlock click (valid user gesture). If the Mixkit sample URL ever 403s or is CORS-blocked, the music player button still lets Hà unmute manually.
- Video scene is a placeholder UI (no real playback).

## Testing Status
- Visually tested with the screenshot tool: gate → loading → welcome → gallery → moments → letter (envelope open) → music → video → finale (blow candle) ✓
- No backend to test.

## Test Credentials
- Password gate: `hayeuanh` (also accepts `Hà yêu anh`, `HAYEUANH`, etc. after normalization).
