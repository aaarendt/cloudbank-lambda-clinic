# CLAUDE.md — AWS Lambda Cloud Clinic

## Project Overview

This is a slide deck for a 30-minute Zoom presentation recorded for the
[NSF CloudBank Cloud Clinics](https://www.cloudbank.org/video-tutorials) YouTube channel.

**Presenter:** Anthony Arendt, eScience Institute, University of Washington  
**Topic:** Using AWS Lambda as a serverless tool for querying a PostgreSQL database on EC2  
**Motivating use case:** The NASA SnowEx campaign database  

---

## File Structure

```
cloudbank-lambda-clinic/
├── CLAUDE.md                        ← you are here
├── UW-accessibility.md              ← comprehensive accessibility guidelines (WCAG 2.1 AA)
├── .agents/
│   └── slide-outline.md             ← full slide outline with notes; edit this to plan new slides
├── fonts/                           ← UW brand fonts (Encode Sans variants)
│   ├── EncodeSansNormal-*.ttf       ← regular width Encode Sans (all weights)
│   ├── EncodeSansWide-*.ttf         ← wide variant (all weights)
│   ├── EncodeSansCompressed-*.ttf   ← compressed variant (all weights)
│   ├── EncodeSansCondensed-*.ttf    ← condensed variant (all weights)
│   └── EncodeSansNarrow-*.ttf       ← narrow variant (all weights)
├── slides/
│   ├── index.html                   ← the main deliverable; all slides live here
│   ├── deck-stage.js                ← slide engine (scaling, keyboard nav, speaker notes)
│   ├── colors_and_type.css          ← UW brand color tokens + @font-face declarations
│   └── assets/                      ← logos and images used in this deck
│       ├── W-Logo_Purple_RGB.png    ← UW W mark
│       ├── escience-logo.png        ← UW eScience Institute logo
│       ├── cloudbank-logo.png       ← NSF CloudBank logo
│       ├── nsf-logo.png             ← NSF logo
│       └── snowex-overview.png      ← NASA SnowEx campaign overview graphic
├── preview/                         ← design system visual references (keep for design decisions)
│   ├── colors-primary.html          ← color swatches with hex/PMS values
│   ├── colors-accent.html           ← accent color palette
│   ├── type-*.html                  ← typography specimens and scales
│   ├── components-*.html            ← button, card, input examples
│   └── spacing-*.html               ← spacing tokens and shadows
├── uploads/                         ← design reference materials
│   ├── PPT_Template_16x9-A_2023.pptx ← official UW PowerPoint template (reference for layouts)
│   ├── uw-colors.txt                ← color reference notes
│   └── *.png                        ← additional logo variants and images
└── ui_kits/                         ← web component library (less relevant for slides)
```

---

## Reference Materials

Before designing new slides, consult these resources:

- **`UW-accessibility.md`** — Comprehensive WCAG 2.1 AA accessibility guidelines (required reading)
- **`uploads/PPT_Template_16x9-A_2023.pptx`** — Official UW PowerPoint template showing approved layouts, spacing, and proportions
- **`preview/colors-primary.html`** — Color swatches with exact hex codes and PMS values
- **`preview/type-*.html`** — Typography specimens showing font weights and scales
- **`preview/components-*.html`** — Component examples (buttons, cards, spacing)

---

## Design System

### Fonts
Fonts are loaded from `colors_and_type.css` which is imported in `index.html`:
- **Encode Sans** (weights 100–900, local TTF files from `../fonts/`) — headlines, titles, eyebrows
- **Open Sans** (weights 300–700, Google Fonts CDN) — body text, subtitles, labels

### Colors
All color tokens are in `colors_and_type.css`. Key tokens:

```css
--uw-husky-purple:   #32006e;   /* darkest purple — use for dark backgrounds */
--uw-spirit-purple:  #4b2e83;   /* main brand purple — most used */
--uw-spirit-gold:    #ffc700;   /* bright gold — accents, eyebrows, highlights */
--uw-husky-gold-web: #e8e3d3;   /* light cream gold — body text on dark bg */
--uw-heritage-gold:  #85754d;   /* deep gold — text on light bg */
```

### Type Scale (for 1920×1080 slides — minimum 24px)
- Slide title: 56–86px, Encode Sans Black, uppercase
- Section eyebrow: 24–28px, Open Sans SemiBold, uppercase, letter-spacing
- Body / bullets: 28–34px, Open Sans Regular
- Presenter meta: 24–26px, Open Sans Regular

---

## Slide Engine

Slides use the `deck-stage.js` web component. Each slide is a `<section>` direct child of `<deck-stage>`:

```html
<deck-stage width="1920" height="1080">
  <section data-label="01 Title" aria-label="Slide 1: Title">
    <!-- slide content -->
  </section>
  <section data-label="02 Research Problem" aria-label="Slide 2: ...">
    <!-- slide content -->
  </section>
</deck-stage>
```

**Key rules:**
- `data-label` must be `"NN Title"` format (1-indexed, two-digit number)
- Each slide is `position: absolute; inset: 0` — design at exactly 1920×1080px
- The engine handles scaling, keyboard navigation (←/→), and speaker notes postMessage
- Speaker notes live in `<script type="application/json" id="speaker-notes">` as a JSON array, one string per slide

---

## Visual Design Language

### Slide Anatomy
Every slide follows one of these layouts:

**Dark (purple bg):** Used for title, section headers, statement slides
- Background: `--uw-spirit-purple` or `--uw-husky-purple`
- Gold accent bar: 8px, top or left edge
- White headline, gold eyebrow, cream body text

**Light (white bg):** Used for content, diagram, code slides
- Background: `#ffffff`
- Purple top band for title area
- Dark text on white for content area

### Recurring Elements
- **Gold accent bar** — 8px, always present on every slide (top or left edge)
- **Eyebrow text** — short uppercase label above title, always in `--uw-spirit-gold`
- **Section `aria-label`** — every slide must have one
- **`.sr-only` class** — defined in the stylesheet for screen-reader-only text

### Logo Usage
All logos are in `slides/assets/`. On dark backgrounds, apply:
```css
filter: brightness(0) invert(1);   /* makes dark logos white */
```
The NSF logo (`nsf-logo.png`) is full-color and should NOT be inverted.

---

## Accessibility Requirements

This deck must meet **WCAG 2.1 Level AA** per [UW APS 9.0 Digital Accessibility](https://policy.uw.edu/directory/aps/section-00-organization-communications-information-management/aps-9-0-digital-accessibility/).

**📖 See `UW-accessibility.md` for comprehensive guidelines** including testing procedures, screen reader support, and keyboard navigation requirements.

**Critical requirements for every slide:**
- `<section>` must have `aria-label="Slide N: Title"`
- All `<img>` must have meaningful `alt` text (or `alt=""` if purely decorative)
- Minimum font size: **24px** at 1920×1080 design resolution
- Color contrast: minimum 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- Do not rely on color alone to convey information
- Use semantic HTML: `<h1>` for slide title, `<ul>`/`<ol>` for lists, `<p>` for body text

**Current implementation status:**
- ✅ Semantic HTML with proper heading hierarchy
- ✅ ARIA labels on all sections and interactive elements
- ✅ Descriptive alt text on all images
- ✅ Large, readable font sizes (minimum 24px)
- ✅ High contrast colors meeting WCAG AA standards
- ✅ Keyboard navigation (arrow keys for slide control)

**Hidden SR-only text** (`.sr-only`) is intentionally 1px — this is correct and expected.

**The YouTube recording** will also need reviewed captions (auto-captions alone do not meet UW APS 9.0).

---

## Speaker Notes

Speaker notes are written as **full conversational scripts**, not bullet points. They live in:

```html
<script type="application/json" id="speaker-notes">
["Slide 1 script...", "Slide 2 script...", ...]
</script>
```

One string per slide, in order. Keep language natural and spoken — these are what Anthony
will say, not what appears on screen.

---

## Slide Outline

See `.agents/slide-outline.md` for the full outline with per-slide notes.
Edit that file to plan new slides, then implement them one at a time.

**Current status:**
- ✅ Slide 01 — Title
- ✅ Slide 02 — The Research Problem (SnowEx)
- 🔲 Slide 03 — What Lambda Is (and Isn't)
- 🔲 Slide 04 — Lambda as Research Infrastructure
- 🔲 Slide 05 — Architecture Overview
- 🔲 Slide 06 — Why Container Images?
- 🔲 Slide 07 — The Dockerfile
- 🔲 Slide 08 — Deploying to ECR
- 🔲 Slide 09 — Wiring Up API Gateway
- 🔲 Slide 10 — CloudBank-Specific Setup
- 🔲 Slide 11 — Live Demo
- 🔲 Slide 12 — Limitations
- 🔲 Slide 13 — What This Pattern Enables
- 🔲 Slide 14 — Resources & Next Steps

---

## Workflow Notes

- Build slides **one at a time** — review and approve before moving to the next
- Match the visual language of existing slides exactly — use `Lambda Deck.html` as the reference
- Do not invent new colors — use only the tokens defined above
- Do not use emoji
- Keep slides **minimal** — one idea per slide, short bullets, large type
- The demo slide (Slide 11) is a full-bleed transition slide — minimal text, signals screen share
