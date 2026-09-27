# Srivani AI Website

A production-ready static React/Vite website for Srivani AI.

## Pages

- `/`
- `/about`
- `/services`
- `/contact`
- `/privacy-policy`
- `/terms`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

After deployment, test:
- `https://YOUR-DOMAIN.vercel.app/privacy-policy`
- `https://YOUR-DOMAIN.vercel.app/terms`

## Before Meta verification

Replace `contact@srivaniai.com` in `src/App.jsx` with your real business email if you have one. Also review the legal text with your actual business structure, data practices, and applicable law before using it as your final legal policy.
