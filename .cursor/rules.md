## Testing (Shopify Themes)

- Run Theme Check before shipping UI changes: `shopify theme check`
- Review the section in the Theme Editor to confirm new settings, defaults, and rendering
- Run Lighthouse for performance/contrast regressions after heavy visual changes

## Section Creation Guidelines (Theme + Shopify Best Practices)

- Use hyphenated filenames in `sections/` and align section names with file intent (e.g. `video-with-text.liquid`)
- Wrap section markup with `<div id="{{ section.id }}" class="section-wrap">` and a child `.section` container to inherit layout + spacing
- Scope section-specific CSS inside a top-of-file `{% style %}` block; prefer `{{ section.id | prepend: '#' }}` for background/visual overrides
- Reuse existing layout utilities and grid classes from `assets/theme.css` instead of introducing new patterns
- Keep section settings in the `{% schema %}` block, grouped with `"type": "header"` for clarity
- Use `section.settings` for section-wide options and `section.blocks` for repeatable content types (e.g. heading/text/buttons)
- Provide `presets` so the section can be added with sensible defaults in the Theme Editor
- Use placeholders (`placeholder_svg_tag`) when media settings are blank
- Prefer `image_picker` for images, `video_url` for external video, and `inline_richtext` for concise headings
- Use `richtext` for longer copy and wrap it in a `.rte` container for consistent typography
- Add `disabled_on` groups where the section should not be allowed (e.g. header)
- Avoid inline scripts/styles outside the `{% style %}` block; place shared JS/CSS in `assets/` and load via `layout/theme.liquid`
- Keep setting `id` values stable and descriptive; changing them breaks existing content data
- Use `section.id` for any element IDs to avoid collisions across multiple instances
- Cap `block` counts with `limit` when layout depends on a maximum
- Provide responsive behavior in CSS and check `assets/mobile.css` for related patterns
- Ensure text contrast and focus states are accessible; don’t rely on color alone
- Use `aria-label` or visually hidden text where icon-only controls exist
- Favor server-rendered markup; add JS only when needed and keep it resilient to missing DOM
- Consider `settings` defaults that render well without content (empty state)
- Check whether the section needs schema `max_blocks` or `settings` constraints
- If content should be translatable, use locale strings (`t`) instead of hardcoded text
- Add or reuse snippets when markup is shared across sections
