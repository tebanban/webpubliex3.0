# Publiex Landing

Static React landing site for Publiex, built from a Figma design.

Always consider coding best practices. Investigate before changing behavior, and keep edits scoped to the current task.

Comment major code sections with short, meaningful comments so the repo stays easy to maintain.

## Tech Stack

- **Package manager**: pnpm
- **Frontend**: React 18 + React Router 6 SPA + TypeScript + Vite
- **Styling**: TailwindCSS 3 utilities and custom Publiex tokens in `client/global.css`
- **Testing**: Vitest
- **UI helpers**: Radix/shadcn components are available in `client/components/ui`
- **Icons**: Lucide React where an icon is needed

## Project Structure

```text
client/
  App.tsx                  # React entry and route registration
  global.css               # Tailwind imports, base styles, Publiex tokens
  content/                 # Static page content used by route components
  components/
    layout/                # Site-wide Header, Footer, SiteLayout
    site/                  # Publiex-specific reusable components
    ui/                    # shadcn/Radix primitives kept for future UI work
  hooks/                   # Shared React hooks
  lib/                     # Utility helpers
  pages/                   # Route components

public/
  images/publiex/          # Figma-exported images, logos, and footer assets
```

## Routing

Routes are defined in `client/App.tsx` using React Router.

Current pages:

- `/` -> `HomePage`
- `/products` -> `ProductsPage`
- `/about` -> `AboutPage`
- `/locations` -> `LocationsPage`
- `/case-studies` -> `CaseStudiesPage`

`SiteLayout` wraps the route pages with the shared header and footer.

## Styling

- Prefer Tailwind utilities and the existing Publiex classes in `client/global.css`.
- Use `publiexAsset(name)` from `client/lib/assets.ts` for assets under `public/images/publiex`.
- Keep page-specific content arrays in `client/content`.
- Keep reusable site components in `client/components/site`.
- Avoid adding new global CSS unless it represents a real shared token or base rule.

## Development Commands

```bash
pnpm dev        # Start Vite dev server
pnpm build      # Build static SPA into dist/spa
pnpm start      # Preview production build locally
pnpm typecheck  # TypeScript validation
pnpm test       # Run Vitest tests
```

## Adding Pages

1. Create the route component in `client/pages`.
2. Add the route in `client/App.tsx` inside the `SiteLayout` route.
3. Put shared copy/media arrays in `client/content` if the page needs structured content.
4. Reuse `client/components/layout` and `client/components/site` before creating new components.

## Backend

There is no active backend in this project. Add API/server code only when strictly necessary, such as private key handling, privileged database access, or server-only integrations.
