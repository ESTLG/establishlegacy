# The Established Legacy — website

Vite + React site with four pages (Home, Resources, Sellability Score, About),
a shared Header/Footer, React Router for navigation, and the Sellability
Score quiz wired to Firestore.

## Project structure

```
src/
  components/layout/       Header, Footer, Layout (wraps every page)
  pages/                   Home, Resources, About, SellabilityScore
  features/sellability-quiz/  the quiz itself: components, hook, question data
  lib/firebase.js          Firebase init + Firestore collection names
  styles/                  tokens.css (brand colors/type), page.css (shared page styles)
```

## Local setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in your Firebase web app config
   (Firebase Console → Project settings → General → Your apps). A `.env`
   pre-filled with the config you gave me is already included — just
   confirm the values match your `establishlegacy-1e9b8` project.
3. `npm run dev`

`.env` is gitignored — it will never be committed. Note that Firebase's
client-side config (the object in `firebase.js`) isn't a secret by design;
your actual security comes from Firestore rules, not from hiding this file.

## Firestore

The quiz writes to a collection named **`sellability-submissions`** (see
`src/lib/firebase.js` → `COLLECTIONS`). Each submission starts as
`status: "started"` when someone enters their contact info, then gets
updated to `status: "completed"` with full results once they finish.

Since Firestore is freshly enabled on this project, it's currently in test
mode. Before this goes live, lock it down with rules like:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /sellability-submissions/{doc} {
      allow create: if true;   // anyone can start/submit the quiz
      allow update: if true;   // allows the "started" -> "completed" update
      allow read, delete: if false; // only readable via the Firebase console / admin SDK
    }
  }
}
```

## Deploying to GitHub Pages

```
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch via the
`gh-pages` package. Make sure GitHub Pages is set to serve from that branch
in the repo's Settings → Pages.

The `base: '/establishlegacy/'` in `vite.config.js` and the `404.html` /
redirect script in `index.html` are both required for this to work under
`https://<your-username>.github.io/establishlegacy/` — see
https://github.com/rafgraph/spa-github-pages for why the 404 trick is
needed (GitHub Pages has no server-side routing, so a direct link to
`/about` would 404 without it).

If you ever move off GitHub Pages to a custom domain, you can drop the
`base` path back to `'/'` and delete `public/404.html`.

## Editing content

- **Copy**: Home/Resources/About are currently filled with lorem ipsum —
  replace the text directly in `src/pages/*/*.jsx`.
- **Nav links**: edit the `NAV_LINKS` array in
  `src/components/layout/Header/Header.jsx`.
- **Brand colors/fonts**: `src/styles/tokens.css`.
- **Booking link**: `src/features/sellability-quiz/components/BookCallCTA/BookCallCTA.jsx`
  still has `BOOKING_URL = "#"` — drop in your Calendly link there.
