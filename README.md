# AI without Borders: NLP Seminar mini-conference, ICS PAS

Website for "AI without Borders" (23 and 30 November 2026), a MOST PAN–supported mini-conference of the
[NLP Seminar](https://zil.ipipan.waw.pl/seminar).

Plain static site (HTML/CSS/JS, no build step), hosted on GitHub Pages.

## Editing content

Everything is in **`data/program.js`**:

| What | Where |
| --- | --- |
| Registration form link | `SITE.registrationUrl` |
| Contact email, deadline, venue | `SITE.*` |
| Talk times, titles, abstracts | `EVENTS[].talks[]` |
| Speaker bios | `bio` field of each talk |
| Speaker photos | drop `photos/<surname>.jpg` (missing → initials) |

Edit directly on github.com (pencil icon) — the site redeploys automatically in ~1 minute.

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Abstracts are taken from https://zil.ipipan.waw.pl/seminar.

After editing `data/program.js`, `assets/app.js` or `assets/style.css`, bump the `?v=`
number on the matching line in `index.html` so browsers fetch the new version immediately.
