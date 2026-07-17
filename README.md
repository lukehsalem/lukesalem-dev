# lukesalem.dev — terminal portfolio

A branded personal site with a living pixel-lobster mascot (Oscar). Built with **Astro**.

**Three layouts ship (the first is the live one; the others are backups):**

- **`/` — Compact portfolio (default).** Terminal on the left; name, about blurb, and a
  red "projects shipped this year" stat + links (incl. a **résumé** button → `/SalemLukeResume.pdf`)
  on the right. Then experience + credentials, skills, projects, and a **real GitHub
  contribution graph** (recolored red) + language breakdown. Oscar is flat single-shade
  (v2), stands on each project card, and cycles laptop → basketball → soccer on his own
  (no roaming, cursor-independent). Footer: "monitored by Oscar."
  Source: `src/pages/index.astro` + `styles/portfolio.css`.
- **`/bento` — Bento dashboard (backup).** Full-screen no-scroll grid with a roaming Oscar.
  Source: `src/pages/bento.astro` + `styles/bento.css`.
- **`/scroll` — Earlier scroll version (backup).** `src/pages/scroll.astro` + `styles/global.css`.

Update the "shipped this year" number anytime in `site.ts` → `shipped: { count, year }`.
Your résumé PDF lives at `public/SalemLukeResume.pdf` — replace that file to update it.

> **Want to just look right now?** Open `preview.html` (the live portfolio),
> `preview-bento.html`, or `preview-scroll.html` in your browser — self-contained, no install.

---

## 1. Make it yours (the important part)

Open **`src/data/site.ts`** — that one file drives the whole page: `about` (the code-block
bio), `experience`, `projects`, `links`, and the `stats` (`kpis` + `focusBars`). Your five
real projects and roles are already in there from your resume + GitHub. **Add a project** by
copying one `{ }` block in `projects`; fill in `name`, `status`, `desc`, `tech`, and optional
`github` / `live` links.

Interactions already wired in: Oscar peeks from each card corner on hover, his claw snaps up
in the hero, and clicking any `code ↗` / `demo ↗` / link fires the "Oscar pulls out a laptop"
loader before opening it. The **contribution heatmap** in the stats section is sample data —
see `src/pages/index.astro` (the `heat` array) to swap in real GitHub contributions later.

- **`src/data/tech.ts`** — the badge dictionary. Each tech gets a brand color + logo.
  If you use a tech that isn't listed, add an entry (or it renders as a neutral gray
  pill). Logos come from simpleicons.org by slug.
- **`src/components/Oscar.astro`** — Oscar the Lobster, drawn as pixel `<rect>`s on a
  160×160 grid. Edit the rects to iterate on him; his blink + bob live in
  `global.css` under `.oscar`.
- **Reskin everything** — change the color tokens at the top of `src/styles/global.css`
  (`--accent`, `--bg`, `--lob` for Oscar, etc.); the whole palette follows.

Writing the copy in your own voice is what makes the site feel personal instead of
generated. Don't leave the `TODO`s in.

## 2. Run it locally

You need Node 18+ (`brew install node` if you don't have it).

```bash
cd lukesalem-dev
npm install
npm run dev
```

Open the printed URL (usually http://localhost:4321). Edits hot-reload instantly.

## 3. Put it on GitHub

```bash
git init && git add -A && git commit -m "feat: terminal portfolio"
gh repo create lukesalem-dev --public --source=. --push
```

## 4. Deploy to Cloudflare Pages (your domain is already there)

1. Go to **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git**.
2. Pick the `lukesalem-dev` repo.
3. Cloudflare auto-detects Astro. Confirm the build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Save and Deploy**. You get a `*.pages.dev` URL in ~1 minute.

**Point lukesalem.dev at it:**

5. In the new Pages project → **Custom domains → Set up a custom domain** → enter
   `lukesalem.dev` (and add `www.lukesalem.dev` too if you want).
6. Because Cloudflare already manages your DNS, it wires the records automatically and
   issues SSL — live in a few minutes. Done.

Every `git push` from now on auto-rebuilds and redeploys. That's your whole workflow.

---

## 5. Using Claude to make the design *incredible*

The trick is a tight **see → critique → refine** loop. Do this inside **Claude Code**
(in this folder), and it can edit the files directly:

1. **Install the Playwright MCP** so Claude can actually *see* the page:
   `claude mcp add playwright` (or add it from the `/mcp` menu). Now Claude can open
   your local site, screenshot it, and judge its own work instead of guessing.
2. **Iterate visually.** Ask things like:
   *"Open the dev server, screenshot the terminal, and make the boot sequence feel more
   cinematic — slower type-on, a subtle glow on the prompt — then show me the diff."*
   Claude edits, re-screenshots, and you steer.
3. **Feed it taste, not vibes.** The more specific your references, the better.
   Use **Cowork** (the desktop app) to collect 3–5 sites you love, drop them in a
   folder, and have Claude describe *why* they work, then apply those principles here.
4. **Small, tasteful upgrades that fit this style** (ask Claude for any of these):
   - a faint CRT scanline / flicker toggle
   - tab-completion for commands
   - a `theme` command that swaps color palettes live
   - a real `resume` command that opens your PDF
   - a `neofetch`-style ASCII banner of your initials on boot
5. **Keep it honest.** After each change, ask Claude to run `npm run build` and check
   the page still scores well on Lighthouse. Clean + fast is part of the aesthetic.

The line to hold: add one thing at a time, keep it subtle, and if a feature doesn't
make *you* smile, cut it. That restraint is what reads as "designed by a person."
