# plugpakka.com

One-page intro site for PlugPakka. Next.js 16 static export + Tailwind, with five animated components:

| Where | Component | Source |
|---|---|---|
| Top menu | Spotlight navbar | Vengeance UI (MIT) |
| Hero background | Animated rays (recoloured to brand lime/blue) | Vengeance UI |
| Hero headline | Morph text: working? / broken? / blocked? | Vengeance UI |
| How it works | Card stack scroll (`skiper16`, adapted to text cards) | Skiper UI (free; footer credit required) |
| Early access | Glow border card | Vengeance UI |

Components live in `src/components/ui/` and are ours to edit (shadcn style). The CSS they need is at the bottom of `src/app/globals.css`.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the finished site to out/
```

## Hosting: GitHub Pages (live)

Every push to `main` runs `.github/workflows/deploy.yml`: lint → build → publish `out/` to GitHub Pages, served at https://plugpakka.com (custom domain set in the repo's Settings → Pages; DNS at GoDaddy has the four GitHub Pages A records and `www` CNAME → `<user>.github.io`). To update the site: edit, commit, push.

GitHub Pages can't send custom HTTP headers, so `.htaccess` is unused there; HTTPS is enforced by Pages and the referrer policy is a meta tag. `.htaccess` is kept for a move to cPanel hosting (below).

## Alternative: GoDaddy cPanel hosting

1. `npm run build`
2. cPanel → File Manager → `public_html` → delete the placeholder page → upload **everything inside `out/`** (keep the `_next` folder).
3. Turn on SSL (cPanel → SSL/TLS Status → AutoSSL). Once https://plugpakka.com shows a padlock, upload `.htaccess` from this folder into `public_html` too (it forces https, drops www, adds security headers, blocks dotfiles, turns off folder listings and sets caching). Not before — it breaks the site without SSL.
4. Check it: open https://plugpakka.com and http://www.plugpakka.com (should land on https://plugpakka.com), and run `curl -I https://plugpakka.com` to see the `Content-Security-Policy` / `Strict-Transport-Security` headers. If the site shows a 500 error, rename `.htaccess` in File Manager and tell whoever maintains this repo: the host is refusing one of its lines.

When you redeploy, replace everything in `public_html` except `.htaccess` (old `_next` folders can be deleted).

Before going live: create the `hello@plugpakka.com` mailbox, or change `EMAIL` at the top of `src/app/page.tsx`.
