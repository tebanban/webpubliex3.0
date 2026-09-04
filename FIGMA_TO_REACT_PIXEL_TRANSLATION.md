# Figma To React Pixel Translation Notes

This document explains why the Publiex Figma design does not translate perfectly into React/CSS by copying dimensions directly, and how the project should handle those differences.

## Core Issue

The Figma homepage is designed as a large fixed canvas, roughly `1920px` wide and more than `17000px` tall. Many elements are positioned with absolute `x` and `y` coordinates. Some sections also bleed outside the nominal viewport, using negative `x` positions or widths larger than `1920px`.

React/CSS pages work differently:

- The browser viewport changes size.
- Content reflows across desktop, tablet, and mobile.
- Text rendering depends on available fonts, browser engine, line-height rules, and font fallback.
- Images scale according to container rules like `object-cover`.
- Sections stack naturally in document flow instead of living on one fixed canvas.

Because of this, a literal Figma-to-code export often looks close at one viewport size but breaks or drifts at other sizes.

## Figma Characteristics In This Design

The Publiex design uses these patterns:

- A `1920px` reference canvas.
- Absolute-positioned sections.
- Full-width and oversized background images.
- Bleeding elements with negative left offsets or widths larger than the viewport.
- Large desktop typography with exact values like `95.44px`, `102.44px`, `79.44px`, `31.44px`, and `27.44px`.
- Mixed font families, mainly `Raleway` and `Uni Sans`.
- Background vectors, gradients, overlays, and masks.
- Some static image mockups that should become real interactive components in React.

These patterns are normal in visual design tools, but they need translation decisions in production code.

## Main Translation Problems

### 1. Fixed Canvas Versus Responsive Viewport

Figma measures everything against a fixed canvas. The browser measures everything against the current viewport.

If we apply `max-width` directly to the outer section, bleeding images and oversized shapes get clipped or centered incorrectly. This is why the project should keep outer sections full-width and constrain only inner wrappers.

Recommended pattern:

```tsx
<section className="relative w-full overflow-hidden">
  <div className="absolute inset-0">Background or bleeding element</div>

  <div className="relative mx-auto w-full max-w-[1920px]">
    Content aligned to the Figma canvas
  </div>
</section>
```

For sections that use the narrower Figma content area:

```tsx
<section className="relative w-full overflow-hidden">
  <div className="relative mx-auto w-full max-w-[1920px]">
    <div className="mx-auto max-w-[1574px]">
      Core content
    </div>
  </div>
</section>
```

### 2. Absolute Positioning Versus Document Flow

Figma can place every element at an exact `x/y` coordinate. In React, sections should usually be built with normal flow, grid, flexbox, and responsive constraints.

Absolute positioning is useful for:

- Background images.
- Decorative shapes.
- Overlays.
- CTA shapes that intentionally bleed.

It should be used carefully for core content because absolute text blocks can overlap or become unreadable on smaller screens.

### 3. Font Rendering Differences

Pixel-perfect typography depends on using the exact same font files.

The Figma design uses `Uni Sans`, but the current CSS only declares:

```css
.font-uni {
  font-family: "Uni Sans", "Inter", sans-serif;
}
```

If `Uni Sans` is not installed or bundled, the browser falls back to `Inter`. That changes:

- Text width.
- Line breaks.
- Vertical rhythm.
- Menu spacing.
- Button and label measurements.

Before expecting pixel-level parity, the project needs the real `Uni Sans` files and `@font-face` declarations.

### 4. Fractional Font Sizes

Figma uses fractional sizes like `31.44px`, `79.44px`, and `95.44px`. CSS supports fractional pixel values, but browsers can render them slightly differently depending on zoom level, operating system, and display scaling.

These values are acceptable for desktop matching, but mobile should usually use `clamp()` or breakpoint-specific values to prevent overflow.

### 5. Image Crop Differences

Figma image fills can preserve a custom crop inside a rectangle. A React `<img>` using `object-cover` only approximates that behavior unless we also match:

- Container size.
- Image intrinsic size.
- `object-position`.
- Any Figma scaling/crop offset.

When a background or section image looks misplaced, the fix is usually not only width/height. It may also require a section-specific `object-position`.

### 6. Figma Masks And Vectors

Several Figma sections use vector overlays, masks, gradients, and blend modes. Builder/Figma exports may represent those as generated SVGs or absolute vector layers.

In production React, we should decide case by case:

- Use exported SVG assets for important masks or branded shapes.
- Use CSS gradients for simple overlays.
- Avoid rebuilding complex vectors manually unless they are simple enough to maintain.

### 7. Static Mockups Versus Real UI

The Figma contact/proposal section originally used a screenshot-like image on the right. The React version now uses a real form.

That means this section is intentionally not pixel-perfect. The correct goal is visual alignment with the design language, not identical reproduction of the static mockup.

## Project Strategy

For this repo, use a practical design-to-code translation instead of blindly copying Figma export code.

### Desktop

- Match the Figma `1920px` design frame as closely as possible.
- Use `max-w-[1920px]` inner wrappers for canvas alignment.
- Use `max-w-[1574px]` inner wrappers where Figma uses narrower content groups.
- Preserve full-width or bleeding backgrounds on the outer section.
- Use exact Figma typography values where safe.

### Tablet And Mobile

- Let content reflow with CSS grid/flex.
- Use `clamp()` for large headings.
- Avoid fixed absolute text positions.
- Stack columns when needed.
- Keep images cropped intentionally with `object-position`.

### Assets

- Use real exported images from Figma when they represent content or photography.
- Use SVG exports for logos, social icons, arrows, and complex vector shapes.
- Avoid placeholders for final visual sections.

### Typography

- Continue using `Raleway` from Google Fonts.
- Add real `Uni Sans` font files if licensing allows.
- Define `@font-face` for every `Uni Sans` weight used by Figma.
- Re-check header and footer spacing after the font is bundled.

## Pixel-Perfect Definition

For this project, "pixel-perfect" should mean:

- At the `1920px` desktop reference width, section heights, major x/y alignment, typography scale, image crop, and background treatment should match Figma closely.
- On smaller viewports, the page should remain usable, readable, and visually consistent, even if it no longer matches the fixed Figma coordinates.

Strict pixel parity at every viewport is not realistic because the Figma source is a fixed canvas, while the website is responsive.

## Recommended Workflow

1. Use the Figma connector to inspect one section at a time.
2. Record the Figma section size, background, image crop, text positions, font sizes, and line heights.
3. Implement the section using the project wrapper pattern.
4. Compare at `1920px` first.
5. Adjust responsive behavior for smaller screens.
6. Run typecheck and build.
7. Move to the next section.

This avoids large generated rewrites and keeps the code maintainable.

## Known Current Limitations

- `Uni Sans` is not bundled, so text using `.font-uni` may fall back to `Inter`.
- Some Figma vector masks are approximated with CSS gradients.
- Some background image crops may still need section-specific `object-position` tuning.
- The proposal section intentionally uses a real form instead of the static Figma screenshot.
- Some sections still use responsive grid approximations instead of exact desktop absolute coordinates.

## Maintenance Rule

Do not solve Figma mismatch by adding a global max-width to the whole page or to every outer section.

Use this rule instead:

- Outer section: full width, owns background and bleed.
- `1920px` wrapper: aligns to the Figma canvas.
- `1574px` wrapper: aligns narrower content groups where the design uses them.
- Component internals: use grid, flex, and carefully scoped absolute positioning.
