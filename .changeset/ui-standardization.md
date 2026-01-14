---
'talent-finder': minor
---

Standardize UI components across all pages

- Add new `LoadingSpinner` component to `$lib/ui` with size and color variants
- Refactor login page to use `LoadingSpinner` component with dark mode support
- Refactor repository page:
  - Replace hardcoded colors with semantic theme colors (success, error, primary, accent)
  - Replace inline SVG with `Icon` component
  - Use `.card` and `.alert-error` classes consistently
- Add theme support to `Modal` and `Signup` components (colors, headingFont props)
- Add demos for all UI components in theme page (Card, LoadingSpinner, ThemeToggle, Signup)
- Reorganize color palettes into 4 columns (Gradients, Sequential, Diverging, Qualitative)
- Expand each palette category to 12 options (added Pink-Purple, Green-Blue, Pink-Yellow-Green, Blue-Yellow-Red, Cyan-Magenta, Green-Brown, Vivid, Retro)
