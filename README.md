# Unparalleled

**Privacy for the agents that think for you.**

Cinematic single-page landing site for Unparalleled. We build the confidential layer
for autonomous AI agents — encrypted inference, shielded on-chain transactions, and
verifiable identity — riding the wave of privacy in web3.

Our thesis is simple: privacy was never only a human right. When machines think, hold
value, and act on our behalf, they deserve the same shield.

## Sections

- **Thesis** — the three acts: Veil (shipping), Vault (in development), Sovereign (the dream).
- **Roadmap** — from a single shielded agent to a private machine economy.
- **Principles** — privacy is a right, verify don't trust, self-custody, built for machinekind.

## Background Video

The fixed, full-screen background video is configured in `src/components/BackgroundVideo.tsx`:

- Active video source: `public/bg/background-video.mp4` (rotated 90° clockwise via `#bg-video` in `src/index.css`)
- Frame-matched fallback poster: `public/bg/poster.jpg`

The background is `position: fixed`, so it never moves while you scroll. It loops, scales
responsively (`object-fit: cover`), and darkens via a scroll-driven `--scrim` opacity
(~0.15 in the hero up to ~0.74 as you scroll) to keep text legible.

## Development

```bash
bun install
bun run dev     # http://localhost:3000
bun run build
bun run lint
```
