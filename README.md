# IndieBacked Startups — Landing Page

Evergreen landing page for **IndieBacked Startups**, a digital-first insurance product line for VC-backed startups in Southern Europe by Indie Mediação de Seguros, Lda (ASF #420563256).

Used at investor and ecosystem events to gauge interest from three audiences: **founders**, **VCs**, and **accelerators / incubators**.

## Stack

- **Frontend:** React 18 + TypeScript + Vite + Tailwind CSS + Radix primitives + react-hook-form + lucide-react
- **Backend:** FastAPI (Python 3.11+) + Pydantic v2 + httpx, proxying to **Buttondown** for waitlist storage
- **i18n:** EN / PT, hand-rolled in `frontend/src/lib/i18n.ts`, persisted to `localStorage`
- **No database** — Buttondown is the store of record

## Layout

```
/
├── frontend/           # Vite + React + TS landing page
└── backend/            # FastAPI proxy to Buttondown
```

Both are runnable independently.

## Quick start

### 1. Backend (terminal 1)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# edit .env and set BUTTONDOWN_API_KEY
uvicorn app.main:app --reload --port 8000
```

The API serves:
- `GET  /health` → `{"status":"ok"}`
- `POST /api/waitlist` → forwards to Buttondown

### 2. Frontend (terminal 2)

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. The dev server proxies `/api/*` to the backend on `:8000`.

## Environment variables

All backend variables live in `backend/.env`. See `backend/.env.example`.

| Var | Required | Notes |
| --- | --- | --- |
| `BUTTONDOWN_API_KEY` | yes | Get one at https://buttondown.com/settings/api |
| `ALLOWED_ORIGINS` | prod only | Comma-separated list of allowed CORS origins. `http://localhost:5173` is always allowed. |

The frontend has no env vars — the API URL is fixed to `/api/...` and proxied by Vite in dev. In production, the frontend and backend must be reachable on the same origin (or you must front them with a reverse proxy).

## Editing copy

Every visible string is in **`frontend/src/lib/i18n.ts`** as a typed dictionary with `en` and `pt` keys side by side. Edit there — no component changes needed.

A few headline alternates are kept as comments at the top of that file for reference.

## Editing the logo strips

Logo arrays live in **`frontend/src/lib/logos.ts`** (two arrays: `CARRIER_LOGOS` and `ECOSYSTEM_LOGOS`).

Logo files live in **`frontend/public/logos/{carriers,ecosystem}/`**. Placeholder SVGs are in place — to swap in a real logo:

1. Save the real file (SVG preferred) at the same path with the same filename, **or**
2. Drop the file anywhere under `public/logos/...` and update the `src` for that entry in `logos.ts`.

The `LogoStrip` component renders all logos in monochrome (light gray on the black background, ~55% opacity) via the `.logo-mono` utility in `frontend/src/index.css`. To change the treatment, edit that one rule.

## Adding the licensed Gilroy font

The site uses **Gilroy** as the primary font with **Poppins** (Google Fonts) as a live fallback. Gilroy is licensed and **not bundled**.

To add Gilroy:

1. Drop these files into `frontend/public/fonts/`:
   - `gilroy-regular.woff2`
   - `gilroy-semibold.woff2`
   - `gilroy-bold.woff2`
   - `gilroy-extrabold.woff2`
2. That's it — `@font-face` declarations in `frontend/src/index.css` already point to those paths.

## Switching from Buttondown to Listmonk

The Buttondown integration is contained to **one file**: `backend/app/buttondown.py`. To switch:

1. Stand up Listmonk (Docker is easiest: https://listmonk.app/docs/installation/).
2. In Listmonk, create three lists or — recommended — a single list with three custom subscriber attributes / tags: `startup`, `vc`, `accelerator`.
3. Replace `backend/app/buttondown.py` with a `listmonk.py` that exposes the same `create_subscriber(...)` coroutine and POSTs to Listmonk's `POST /api/subscribers`. Listmonk uses HTTP Basic auth with an API user.
4. Update `backend/app/main.py` to `from .listmonk import ButtondownError, create_subscriber as create_subscriber` (or rename the symbols).
5. Replace env vars: `BUTTONDOWN_API_KEY` → `LISTMONK_URL`, `LISTMONK_USER`, `LISTMONK_PASSWORD`. Update `.env.example` to match.

The frontend doesn't change — it only knows about `POST /api/waitlist`.

## Deployment

### Quick preview on GitHub Pages (no backend required)

A GitHub Actions workflow at `.github/workflows/pages.yml` builds the frontend with `VITE_PUBLIC_DEMO=1` and publishes it to GitHub Pages on every push to `main` or `claude/new-session-uIKeP`. In demo mode the form skips the backend and simulates success — useful for showing the page at events before the backend is live.

To enable: in the GitHub repo, **Settings → Pages → Build and deployment → Source: GitHub Actions**. The first push after that will publish to `https://<owner>.github.io/<repo>/`.

### Production (with the FastAPI backend)

- **Frontend:** `npm run build` produces a static bundle in `frontend/dist/`. Deploy to any static host (Vercel, Netlify, Cloudflare Pages, S3, nginx). Leave `VITE_PUBLIC_DEMO` unset so the form calls the real API.
- **Backend:** any Python host that runs `uvicorn`. Set `BUTTONDOWN_API_KEY` and `ALLOWED_ORIGINS` (comma-separated, including the production frontend URL).
- Put the frontend and backend behind the same hostname (or proxy `/api` from the frontend host to the backend) so the relative `/api/waitlist` path works.

## Analytics

Not wired. There's a `// TODO: GA4 / Plausible` comment in `frontend/src/main.tsx` — drop a script tag in `index.html` or an init call in `main.tsx`.

## Brand reference

- Yellow: `#FBDE23`
- Black: `#110522`
- Tone reference: https://indie.pt
