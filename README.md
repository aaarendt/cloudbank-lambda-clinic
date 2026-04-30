# AWS Lambda Cloud Clinic Slide Presentation

**Institution:** University of Washington (UW)  
**Campuses:** Seattle (primary), Bothell, Tacoma  
**Brand site:** [uw.edu/brand](https://www.uw.edu/brand)  
**Fonts download:** [uw.edu/brand/fonts](https://www.uw.edu/brand/fonts)

## Sources Provided

| Asset | Notes |
|---|---|
| `uploads/PPT_Template_16x9-A_2023.pptx` | Official UW 16:9 brand PowerPoint template (2023). Contains slide layouts, embedded fonts, theme colors, and campus photography. |
| `uploads/W-Logo_Purple_RGB.png` | Official UW "W" logo in Spirit Purple, RGB/digital format |
| `uploads/uw-colors.txt` | Official UW brand color specifications |
| `uploads/Open-Sans-Family-1.zip` | *(Not received — font zip did not upload; using Google Fonts instead)* |
| `uploads/UniSans-1.zip` | *(Not received — font zip did not upload; substituted with Nunito)* |
| `uploads/Encode-Sans-Family-1.zip` | *(Not received — font zip did not upload; using Google Fonts instead)* |

---

## Company / Product Context

The University of Washington is a major public research university founded in 1861, headquartered in Seattle, WA. It is one of the largest universities in the United States, with over 50,000 students across three campuses.

UW's digital and print presence spans:
- **UW.edu** — the primary institutional website
- **MyUW** — student/staff portal
- **Academic department sites** — using shared brand framework
- **Presentation decks** — standardized PowerPoint templates (16:9)
- **Athletics** — Huskies brand (overlapping but distinct)
- **UW Medicine** — affiliated but separate brand

The design system is built around two core visual pillars: **Spirit Purple** and **Husky Gold**, reflecting institutional heritage while maintaining WCAG-compliant digital accessibility.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
UW communicates with **authority, warmth, and optimism**. The tone is:
- **Institutional but accessible** — smart, not jargon-heavy
- **Inclusive and welcoming** — speaks to a diverse global community
- **Purpose-driven** — focused on impact, discovery, and community

### Casing
- **Slide titles:** ALL CAPS, tracked widely (Encode Sans Black)
- **Section headings:** Title Case or ALL CAPS
- **Body copy:** Sentence case
- **Labels/overlines:** ALL CAPS, small, with tracking

### Pronoun style
- Uses **"we/our"** for institutional voice ("We are proud to…")
- Uses **"you/your"** when addressing prospective students or general audience
- Avoids first-person singular ("I") in brand communications

### Emoji
❌ **Not used** in official brand communications. Not present in templates.

### Numbers & Data
Data is presented directly without decoration. Statistics are shown large and prominently in presentations. No emoji or icon decorations around numbers.

### Copywriting Examples (from PPTX template)
- "BRAND POWERPOINT TEMPLATE"
- "FONTS ARE INCLUDED WITH THIS TEMPLATE, BUT IF THEY DO NOT DISPLAY CORRECTLY:"
- "Go to uw.edu/brand/fonts"
- "Download three fonts: Encode Sans, Uni Sans, Open Sans"

### Vibe
**Bold, timeless, Northwestern.** The brand feels grounded — not trendy. Think Pacific Northwest landscapes, academic gravitas, warm sunset tones. Photography leans warm and gold-toned (see `assets/pptx_image1.jpg`).

---

## VISUAL FOUNDATIONS

### Colors
See `colors_and_type.css` for full token definitions.

**Primary palette:**
| Name | Hex | Use |
|---|---|---|
| Husky Purple | `#32006e` | Deep backgrounds, high-contrast use |
| Spirit Purple | `#4b2e83` | Most-used digital purple, primary actions |
| Husky Gold (warm) | `#b7a57a` | Print primary gold |
| Husky Gold (web) | `#e8e3d3` | Digital background tint |
| Heritage Gold | `#85754d` | Text on light backgrounds |
| Spirit Gold | `#ffc700` | Highlights, accents, CTAs |

**Accent palette** (≤15% of any design):
Accent Green `#aadb1e`, Accent Teal `#2ad2c9`, Accent Pink `#e93cac`, Accent Lavender `#c5b4e3`

**Compliant combos:** White on Spirit Purple • Spirit Purple on White • White on Heritage Gold • Husky Gold (#e8e3d3) on Spirit Purple

### Typography
- **Display / Headings:** Encode Sans (Black 900 weight) — uppercase, tracked. Used for all slide titles and major headings.
- **Body / UI:** Open Sans — clean, highly legible, used for all body copy, labels, captions.
- **Sub-brand / Decorative:** Uni Sans Regular — used sparingly for decorative or secondary brand moments. *Substituted with Nunito in this design system; request original font files from uw.edu/brand/fonts.*

### Backgrounds
- **Slides:** Spirit Purple (`#4b2e83`) is the dominant slide background
- **Photography:** Full-bleed campus/landscape photography, treated with a warm gold/cream tone overlay
- **Subtle surfaces:** `#e8e3d3` cream-gold for cards and secondary surfaces
- **No heavy gradients** — solid fills dominate; very subtle overlays used over photography

### Photography Style
- Pacific Northwest landscapes, campus life, sky shots
- Color-treated to warm golden/amber tones (low saturation, warm overlay)
- Used as full-bleed backgrounds with text overlaid in white or gold

### Spacing & Layout
- Generous white space on web; tighter on slides
- Left-aligned content is standard; centered for titles on slides
- Fixed header bar patterns common on web properties

### Animation
- Minimal — no bounces or playful easing
- Fades and simple slides; transitions are functional, not decorative
- No looping animations in brand materials

### Hover States
- Links: color shift from Spirit Purple to Husky Purple
- Buttons: slight darkening of background; no scale change
- Cards: subtle shadow lift (`box-shadow` increase)

### Press / Active States
- Color slightly darker; no shrink/scale animations

### Borders
- Thin, minimal — 1px `#b3b3b3` for dividers
- Brand accent bars use Spirit Gold or Spirit Purple at 3–4px

### Shadows
- Light drop shadows: `0 4px 16px rgba(50,0,110,0.12)`
- Used sparingly on cards; not on text or inline elements

### Cards
- White background on light surface (or Spirit Purple on dark)
- Thin border or subtle shadow for elevation
- Low border radius (2–4px) — the brand is sharp, not rounded
- No colored left-border accent (not a UW pattern)

### Corner Radii
- Very low: 2–4px maximum. Sharp corners are the UW standard.

### Transparency & Blur
- Photo overlays use low-opacity color washes
- Blur is not a standard brand motif

### Imagery Color Vibe
- Warm, golden, desaturated — Pacific Northwest sunset quality
- Campus photography is treated with a warm overlay matching `#e8d3a2`

### Icons
- No proprietary icon font found in template assets
- SVG logos and wordmarks are provided (W mark, text lockup)
- See ICONOGRAPHY section below

---

## ICONOGRAPHY

**Icon system:** UW does not use a custom icon font or icon set in the provided materials. Icons on web properties typically use a system or open-source set (likely SVG-based).

**Logos provided:**
- `assets/W-Logo_Purple_RGB.png` — Primary W mark, Spirit Purple on white
- `assets/pptx_image2.png` — W mark (extracted from PPTX)
- `assets/pptx_image3.svg` — W letterform SVG (Husky Purple #32006E) — from slide template
- `assets/pptx_image5.svg` — UW Bothell text wordmark SVG

**Background photography:**
- `assets/pptx_image1.jpg` — Warm-toned PNW sky/treeline landscape (full-bleed background)

**Icon substitution note:** For UI kits, Lucide Icons (CDN) is used as a stand-in for general UI iconography, as UW does not provide a custom icon set. This should be verified against actual UW web properties.

**Emoji:** Not used in brand materials.

---

## FILES INDEX

```
README.md                         ← You are here
colors_and_type.css               ← CSS variables for colors & typography
SKILL.md                          ← Agent skill definition

assets/
  W-Logo_Purple_RGB.png           ← Primary W mark logo
  pptx_image1.jpg                 ← Brand photography (warm PNW sky)
  pptx_image2.png                 ← W mark (from PPTX)
  pptx_image3.svg                 ← W letterform SVG
  pptx_image5.svg                 ← UW Bothell wordmark SVG

preview/                          ← Design System tab cards
  colors-primary.html
  colors-accent.html
  colors-semantic.html
  type-display.html
  type-body.html
  type-scale.html
  spacing-tokens.html
  components-buttons.html
  components-inputs.html
  components-cards.html
  brand-logo.html

slides/
  index.html                      ← Slide template demo
  TitleSlide.jsx
  ContentSlide.jsx
  BigQuoteSlide.jsx
  SectionSlide.jsx

ui_kits/
  website/
    index.html                    ← UW.edu website UI kit
    Header.jsx
    Hero.jsx
    Cards.jsx
    Footer.jsx
```
