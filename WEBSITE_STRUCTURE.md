# Publiex Website Structure

This document explains the current React structure for the Publiex OOH website.

## App Layout

The site is a Vite React single-page application. Routes are defined in `client/App.tsx` and rendered inside `SiteLayout`.

Global layout:

- `client/components/layout/SiteLayout.tsx`: wraps every route.
- `client/components/layout/Header.tsx`: shared header for all pages.
- `client/components/layout/Footer.tsx`: shared footer for all pages.

Routes:

- `/`: homepage.
- `/products`: products page.
- `/about`: about us page.
- `/locations`: locations page.
- `/case-studies`: case studies page.
- `*`: not found page.

Shared site components:

- `CampaignCta`: red CTA section above the footer.
- `ImagePanel`: reusable image card for product, case, and insight cards.
- `PageIntro`: reusable intro block for inner pages.
- `PrimaryLink`: branded CTA link.
- `SectionLabel`: small uppercase section label.

Homepage arrays live in `client/content/home.ts`:

- `solutions`
- `stats`
- `cases`
- `insights`

## Layout Width Rule

The Figma design is based on a `1920px` canvas and includes backgrounds or shapes that bleed beyond the visible viewport.

Use this structure for sections:

```tsx
<section className="relative w-full overflow-hidden">
  <div className="absolute inset-0">Background or bleeding visual</div>

  <div className="relative mx-auto w-full max-w-[1920px]">
    Section content
  </div>
</section>
```

If the Figma section uses a narrower content grid, add a second wrapper:

```tsx
<section className="relative w-full overflow-hidden">
  <div className="relative mx-auto w-full max-w-[1920px]">
    <div className="mx-auto max-w-[1574px]">
      Core text, cards, grids, and menus
    </div>
  </div>
</section>
```

Do not put the main `max-width` on the outer section. The outer section should control background, color, and bleed. Inner wrappers should control alignment.

## Homepage

File: `client/pages/HomePage.tsx`

The homepage has 15 body sections. With the shared header and footer, the full rendered page has 17 main sections.

### 1. Header

File: `client/components/layout/Header.tsx`

Purpose:

- Shows the Publiex logo.
- Provides global navigation.
- Includes the "Solicitar propuesta" primary action.
- Uses a full-width white outer header with a `1920px` inner frame.

Menu items:

- Nosotros
- Soluciones publicitarias
- Explorar ubicaciones
- Analitica
- Actualidad
- Casos

### 2. Hero

Purpose:

- Opens the site with the main brand promise.
- Uses a full-bleed OOH background image.
- Sends users to campaign planning or location exploration.

Main elements:

- Background image: `figma-home-hero.jpeg`.
- Blue/black overlay gradient.
- Main headline.
- Supporting text.
- Primary CTA to `#contacto`.
- Secondary link to `#ubicaciones`.

### 3. Location Finder

Purpose:

- Introduces the location discovery workflow.
- Connects formats, provinces, metrics, and availability.

Main elements:

- Blue gradient background.
- Left text block.
- "Buscar" link.
- Right image: `figma-location.jpeg`.

### 4. Impact Statement

Purpose:

- Communicates that outdoor advertising cannot be skipped.

Main elements:

- Background image: `figma-skip-ad.jpeg`.
- Dark overlay.
- Right-aligned label, headline, and supporting copy.

### 5. Company Story

Purpose:

- Introduces Publiex history and credibility.

Main elements:

- Background image: `figma-about.jpeg`.
- Dark overlay.
- "27 anos" emphasis.
- Right-aligned company copy.

### 6. Advertising Solutions

Purpose:

- Previews the product families.

Main elements:

- Blue gradient background.
- Large headline.
- "Ver todas las soluciones" link.
- Product grid driven by `solutions`.
- Cards rendered with `ImagePanel`.

### 7. Large Format

Purpose:

- Presents high-impact large-format inventory.

Main elements:

- Image: `figma-large-format.jpeg`.
- Text column.
- Section label.
- Headline.
- Supporting copy.
- CTA link.

### 8. Urban Furniture / Banner Posts

Purpose:

- Explains route-based repeated visibility.

Main elements:

- Text column.
- Image: `figma-urban-furniture.jpeg`.
- CTA link.

### 9. Transport Advertising

Purpose:

- Presents train and transport advertising as repeated audience contact.

Main elements:

- Image: `figma-transport.jpeg`.
- Navy text area.
- CTA link.

### 10. Digital And Special Formats

Purpose:

- Groups DOOH and special project inventory.

Main elements:

- Two-column layout.
- DOOH image: `figma-dooh-raw-1.jpeg`.
- Special projects image: `figma-special-projects.jpeg`.
- CTA links for both formats.

### 11. Audience Analytics

Purpose:

- Reframes planning from buying spaces to conquering audiences.

Main elements:

- Light gradient background.
- Main audience/data headline.
- Circular metric highlight.
- Stat cards driven by `stats`.

### 12. Case Studies Preview

Purpose:

- Shows example campaigns from the homepage.

Main elements:

- Navy background.
- Section headline.
- Case cards driven by `cases`.
- Cards rendered with `ImagePanel`.

### 13. News And Insights

Purpose:

- Presents editorial content around OOH, strategy, measurement, and media.

Main elements:

- Section headline.
- Insight cards driven by `insights`.
- Cards rendered with `ImagePanel`.

### 14. Agency And Owner Paths

Purpose:

- Splits visitors into agency and property-owner journeys.

Main elements:

- Two-column section.
- Agency CTA.
- Property owner CTA.

### 15. Proposal / Contact Form

Purpose:

- Collects campaign context for the commercial team.

Current fields:

- Que quiere lograr
- Zona de interes
- Nivel de cobertura
- Name
- Email
- Business
- Note

Note: this section intentionally differs from the Figma screenshot because it now contains a real form instead of a static image.

### 16. Campaign CTA

File: `client/components/site/CampaignCta.tsx`

Purpose:

- Final high-impact conversion prompt before the footer.

Main elements:

- Red full-width background.
- Left message: "Hagamos que Costa Rica vea su campana".
- Black rounded CTA shape aligned inside the `1920px` frame and allowed to bleed right.

### 17. Footer

File: `client/components/layout/Footer.tsx`

Purpose:

- Provides global footer navigation, social links, and back-to-top action.

Main elements:

- Blue gradient background.
- Centered footer logo.
- Back-to-top link.
- Four menu columns:
  - Soluciones
  - Planificar
  - Publiex
  - Contacto
- Social icon row.

## Products Page

File: `client/pages/ProductsPage.tsx`

Current sections:

1. `PageIntro`
   - Eyebrow: Soluciones publicitarias.
   - Title: "Un pais. Infinitas formas de ser visto."
   - Description explaining that the full inventory page will cover formats, campaign objectives, and urban context.

2. Product Categories
   - Grid of product cards driven by `solutions`.
   - Uses `ImagePanel`.
   - Ends with a "Solicitar propuesta" CTA.

## About Us Page

File: `client/pages/AboutPage.tsx`

Current sections:

1. `PageIntro`
   - Eyebrow: Quienes somos.
   - Title: "27 anos mirando hacia adelante."
   - Description explaining that the page will expand company history, team, operations, and evolution.

2. Company Snapshot
   - Two-column section.
   - Left image: `figma-about.jpeg`.
   - Right text block about experience, coverage, and criteria.
   - CTA: "Conversar con Publiex".

## Locations Page

File: `client/pages/LocationsPage.tsx`

Current sections:

1. `PageIntro`
   - Eyebrow: Explorar ubicaciones.
   - Title: "Encuentre el lugar donde su marca debe estar."
   - Description explaining future filters by province, format, audience, availability, and technical sheets.

2. Location Planning
   - Two-column section.
   - Left text block about turning coverage into campaign decisions.
   - CTA: "Solicitar ubicaciones".
   - Right image: `figma-location.jpeg`.

## Case Studies Page

File: `client/pages/CaseStudiesPage.tsx`

Current sections:

1. `PageIntro`
   - Eyebrow: Casos de exito.
   - Title: "Campanas que se volvieron parte del viaje."
   - Description explaining future objective, format, location, metrics, and results details.

2. Featured Cases
   - Navy background.
   - Grid of case cards driven by `cases`.
   - Uses `ImagePanel`.
   - Ends with a "Crear una campana" CTA.

## Maintenance Notes

- Keep route-level pages in `client/pages`.
- Keep shared layout components in `client/components/layout`.
- Keep reusable branded sections in `client/components/site`.
- Keep static content arrays in `client/content/home.ts` until a CMS or API is introduced.
- Keep full-width backgrounds on outer sections.
- Apply `max-w-[1920px]` or `max-w-[1574px]` only to inner wrappers.
- Bundle or define the real `Uni Sans` font before expecting pixel-level typography parity with Figma.
