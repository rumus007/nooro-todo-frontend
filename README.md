# Todo Frontend (Next.js App Router + Tailwind + TypeScript)


## Local Setup

1) Install dependencies
```bash
npm install
```

2) Copy env and edit API URL
```bash
cp .env.local.example .env.local
# Ensure NEXT_PUBLIC_API_URL points to your running Express API (default http://localhost:4000)
```

3) Dev server
```bash
npm run dev
# Next.js runs on http://localhost:3000
```

## Notes

- API wrapper is in `lib/api.ts`.
- Reusable components: `TaskCard`, `TaskForm` in `/components`.
- App Router pages are under `/app`.
