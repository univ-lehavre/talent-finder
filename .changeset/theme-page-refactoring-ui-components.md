---
"talent-finder": minor
---

feat(ui): add dropdown and theme utility components, refactor theme page

New UI components:
- Dropdown: reusable dropdown menu with trigger, backdrop, and scroll-to-selected
- DropdownCategory: sticky category header for dropdown menus
- DropdownItem: selectable item with selection indicator
- ColorSwatch: color preview (single or grouped colors)
- ColorScaleRow: table row for displaying color scale palettes
- CodeExample: code snippet block with syntax highlighting
- PageHero: simple page hero section with subtle background

Theme page refactoring:
- Replace ThemeSection with Section component for better consistency
- Use new Dropdown components for palette and font selectors
- Use ColorSwatch for all color previews
- Use ColorScaleRow for color scale table (reduces ~400 lines of repetition)
- Use CodeExample for usage examples
- Reduce page from ~1112 lines to ~545 lines
