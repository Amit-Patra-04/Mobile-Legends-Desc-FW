---
description: Always use font size in golden ratio format wise across the application
globs: ["**/*.jsx", "**/*.tsx", "**/*.js", "**/*.css", "**/*.html"]
---

# Golden Ratio Typography Standard

Always format font sizes, text hierarchies, and typographic proportions using the **Golden Ratio modular scale** ($\phi = 1.61803398875$ with harmonic half-steps $\sqrt{\phi} \approx 1.272$):

## Golden Ratio Modular Scale (Base: 16px / 1rem)
- **`text-phi-xs`** (`0.618rem` / ~9.89px / $\phi^{-1}$): Badges, telemetry, micro metadata, superscript codes.
- **`text-phi-sm`** (`0.786rem` / ~12.58px / $\phi^{-0.5}$): Secondary labels, caption details, tags, button micro-copy.
- **`text-phi-base`** (`1.000rem` / 16.00px / $\phi^0$): Standard body text, primary descriptions, card content.
- **`text-phi-md`** (`1.272rem` / ~20.35px / $\phi^{0.5}$): Lead paragraphs, hero subtext, prominent navigation, card subtitles.
- **`text-phi-lg`** (`1.618rem` / ~25.89px / $\phi^1$): Section subheadings, modal headers, card titles (H4/H3).
- **`text-phi-xl`** (`2.058rem` / ~32.93px / $\phi^{1.5}$): Major section headings, hero secondary titling (H3/H2).
- **`text-phi-2xl`** (`2.618rem` / ~41.89px / $\phi^2$): Primary section banners, major modal titles (H2).
- **`text-phi-3xl`** (`3.330rem` / ~53.28px / $\phi^{2.5}$): Hero section titles, prominent display headings.
- **`text-phi-4xl`** (`4.236rem` / ~67.78px / $\phi^3$): Epic display titles, landing page main hero headline (H1).
- **`text-phi-5xl`** (`6.854rem` / ~109.66px / $\phi^4$): Jumbo aesthetic numerals, monumental hero watermarks.

## Line Height & Spacing Ratios
- **Body & Paragraphs**: Use golden ratio line height `1.618` (`leading-relaxed`) for readability.
- **Headings & Titles**: Use golden inverse line heights (`1.05` to `1.272`) for compact visual weight.
