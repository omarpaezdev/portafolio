# AGENTS.md — Portafolio

## Frontend Design Rules

Before writing any frontend code, read and apply all rules from:

- .opencode/rules.md
- .opencode/components.md
- .opencode/tokens.md
- .opencode/anti-generic.md

Never generate generic UI. Always declare aesthetic direction before coding.

## Tech Stack

- Frontend: React + Vite (dev port 5173), React Router v6
- Backend: Flask + SQLAlchemy (port 3001)
- DB: PostgreSQL (falls back to SQLite if no `DATABASE_URL`)
- Deploy: Render.com (gunicorn)

## Commands

```bash
# Frontend
npm run dev        # Vite dev server (5173)
npm run build      # Output: dist/
npm run lint       # ESLint (jsx/js, React plugin)

# Backend (pipenv)
pipenv install     # Install Python deps
pipenv run migrate # Generate Alembic migration
pipenv run upgrade # Apply migrations

# Render build
./render_build.sh  # npm install + build + pipenv install + upgrade
```

## Architecture

- `src/front/`: React app (entry: `main.jsx`, routes: `routes.jsx`)
- `src/api/`: Flask API (registered as `/api` blueprint)
- `src/app.py`: Flask app, serves `dist/` in production
- `src/wsgi.py`: Gunicorn entry point

Frontend/backend run separately (no proxy). If `VITE_BACKEND_URL` is unset, app renders `<BackendURL>` config component instead of starting.

## Environment

Copy `.env.example` to `.env`. Required vars:

- `VITE_BACKEND_URL=http://127.0.0.1:3001/` (must be set for frontend to load)
- `FLASK_APP=src/app.py`
- `DATABASE_URL`: Auto-converts `postgres://` to `postgresql://`

## Database

Migrations: Alembic via Flask-Migrate. First setup: `database.sh` (init + migrate + upgrade). Subsequent: `pipenv run migrate && pipenv run upgrade`.

## Deployment

Render uses `gunicorn wsgi --chdir ./src/`. Python 3.10.6. Build runs `render_build.sh`.

## Notes

- VSCode: format on save (Prettier for JS/JSX)
- No test framework configured
- `dist/` is gitignored but required for production Flask serving
