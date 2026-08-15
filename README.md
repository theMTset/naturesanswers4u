# Nature's Answers for You

A static one-page site for Pat McCain — Body Code Practitioner, Reiki Level II.
Plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page |
| `style.css` | All styling |
| `script.js` | Scroll reveals, sticky header, footer year |
| `hand.webp` | The hand, lifted from the printed business card |
| `photo-2-JPG-a07-150x150.jpg` | Pat's photo in the About section |
| `paper.webp` | Seamless paper-grain tile used as the page background |
| `favicon.svg` | Browser tab icon |

The cream (`#F3E7D6`), the ochre, and the hand are all sampled from the actual
card, so the site and the card are the same piece of paper.

## Live site

The site is published through GitHub Pages at:

**https://themtset.github.io/naturesanswers4u/**

GitHub Pages deploys automatically from the root of the `main` branch.

### Using naturesanswers4u.org instead

In **Settings → Pages → Custom domain**, enter `naturesanswers4u.org`. Then at
whoever manages the domain, point DNS at GitHub:

- Four `A` records for `naturesanswers4u.org` → `185.199.108.153`,
  `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- One `CNAME` record for `www` → `<username>.github.io`

Tick **Enforce HTTPS** once the domain verifies.

## Editing the content

Everything is plain text in `index.html` — open it in any text editor.

- **Phone number** appears in four places. Search for `8648366085` (the `tel:`
  links) and `864-836-6085` (the visible text) and change both.
- **Section text** sits between the HTML tags, e.g. `<h2>Pat McCain</h2>`.
- **Colors** are at the top of `style.css` under `:root` — change `--ochre`
  or `--paper` once and it updates everywhere.

### Copy worth reviewing

I wrote the connecting text (the three offering descriptions, the four-step
"Approach" list, and the About paragraph) based only on what the card says.
Pat should read these over and correct anything that misrepresents how she
actually works, particularly:

- the six Body Code categories
- the four session steps
- "serving the Upstate of South Carolina"

## Notes

- Headings use **Quicksand** loaded from Google Fonts, chosen to match the
  card's rounded lettering. If it ever fails to load the page falls back to a
  standard sans and still reads fine.
- All motion is subtle and switches off automatically for anyone with
  "reduce motion" enabled in their system settings.
- The page still displays correctly with JavaScript disabled.
- Total page weight is about 160 KB.

## A note on the disclaimer

The footer states that this is complementary wellness work and not medical
care. That is there deliberately — it sets honest expectations and is a
sensible protection for Pat. Please keep it.
