# Mesh Design System Demo

React + TypeScript + MUI project with Mesh design tokens for Figma-to-code workflow demos.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Design Tokens

All design tokens from Figma are in the `/tokens` folder:
- `colors.json` - Color palette (27 colors)
- `typography.json` - Text styles (18 styles)

These are integrated into the MUI theme in `src/theme.ts`.

## Tech Stack

- React 18
- TypeScript
- Material UI (MUI) 5
- Vite
- THICCCBOI font

## For Claude Code / Cursor

When building components from Figma:
1. Reference the tokens in `/tokens` for exact values
2. Use the MUI theme colors: `primary`, `secondary`, `error`, `warning`, `success`, `info`
3. Typography variants map to: `h1-h6`, `subtitle1-2`, `body1-2`, `button`

## Demo Workflow

1. Open a Figma design link
2. Ask Claude to build the component using the design tokens
3. Component gets added to `src/components/`
4. See it live in the browser
